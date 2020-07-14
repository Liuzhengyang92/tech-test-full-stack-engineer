const dbPool = require('./db');
const express =require('express');
const bodyParser = require('body-parser');
const https = require('https');
const { insertRecordToDB, filterSpaceItem } = require('./utils');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next) => {
  const origin = req.get('origin');

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
  } else {
    next();
  }
});

app.get('/', async (req, res) => {
    const rows = await dbPool.query('SELECT * FROM spaceData');
    res.status(200);
    res.send({
        result: JSON.stringify(rows)
    });
});

app.get('/capsules', (req, res) => {
  const chunks = [];
  try {
    https.get('https://api.spacexdata.com/v3/capsules', (rsp) => {
      rsp.setEncoding('utf8')
        .on('data', (chunk) => {
          chunks.push(chunk);
        })
        .on('end', () => {
          const capsulesData = JSON.parse(chunks.join(''));
          res.status(200).send(capsulesData)
        });
    }).on('error', e => res.status(404).send(e));
  } catch (err) {
    res.status(400).send(err)
  }
})

app.get('/launch', async (req, res) => {
  const rows = await dbPool.query('SELECT * FROM spaceData WHERE id = ?', req.query.id);
  if (rows.length === 0) {
    const chunks = [];
    try {
      https.get(`https://api.spacexdata.com/v3/landpads/${req.query.id}`, (rsp) => {
        rsp.setEncoding('utf8')
          .on('data', (chunk) => {
            chunks.push(chunk);
          })
          .on('end', () => {
            const landingPadData = JSON.parse(chunks.join(''))
            const filteredLandingPadData = filterSpaceItem(landingPadData)
            
            if (filteredLandingPadData.id) {
              const err = insertRecordToDB(filteredLandingPadData)
              if (err) {
                res.status(500).send('Error saving data to database!');
              } else {
                res.status(200).send(filteredLandingPadData)
              }
            } else {
              res.status(404).send("No landing pad found with given id!")
            }
          });
      }).on('error', e => res.status(404).send(e));
    } catch (err) {
      res.status(400).send(err)
    }
  } else {
    res.status(200).send(JSON.parse(rows[0].spaceItem));
  }
})

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);
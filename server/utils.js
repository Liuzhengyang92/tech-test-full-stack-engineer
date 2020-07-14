const dbPool = require('./db');

const insertRecordToDB = (filteredLandingPadData) => {
  let stmt = `INSERT INTO spaceData (id, spaceItem)
                VALUES(?,?)`;
  let todo = [filteredLandingPadData.id, JSON.stringify(filteredLandingPadData)];
  dbPool.query(stmt, todo, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    } else {
      return null;
    }
  });
}

const filterSpaceItem = (landingPadData) => {
  const filteredLandingPadData = {};
  filteredLandingPadData.id = landingPadData.id;
  filteredLandingPadData.full_name = landingPadData.full_name;
  filteredLandingPadData.status = landingPadData.status;
  filteredLandingPadData.location = landingPadData.location;    
  return filteredLandingPadData;
}

module.exports = {
  insertRecordToDB,
  filterSpaceItem
}
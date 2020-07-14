import styled from 'styled-components';

const CapsulesControlDiv = styled.div`
    padding: 10px 30px;
    border-right: 1px solid black;
    grid-column: 1 / 2;
    display: flex;
    align-items: stretch;
`

const CapsulesControlButton = styled.button`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: black;
    background-color: white;
    flex-grow: 1;
    border: 1px solid black;    
    border-radius: 5px;
    transition: font-size .3s;
    &:hover {
      font-size: 30px;
    }
    &:active {
      background-color: lightgrey;
    }
`;

export {
  CapsulesControlDiv,
  CapsulesControlButton,
};
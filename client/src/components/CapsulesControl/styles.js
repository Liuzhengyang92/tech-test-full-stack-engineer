import styled from 'styled-components';

const CapsulesControlDiv = styled.div`
    padding: 10px 30px;
    border-right: 1px solid black;
    grid-column: 1 / 2;
    display: flex;
    align-items: stretch;
    @media (max-width: 1050px) {
      grid-row: 1 / 2;
      grid-column: 1 / 5;
      padding: 5px;
      border-right: none;
      align-items: center;
      border-bottom: 1px solid black;
    }
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
      @media (max-width: 1050px) {
        font-size: 20px;
      }
    }
    &:active {
      background-color: lightgrey;
    }
    @media (max-width: 1050px) {
      width: 90%;
      font-size: 20px;
      height: 50%;
    }
`;

export {
  CapsulesControlDiv,
  CapsulesControlButton,
};
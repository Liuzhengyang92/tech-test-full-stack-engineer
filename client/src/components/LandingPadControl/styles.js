import styled from 'styled-components';

const LandingPadControlDiv = styled.div`
    padding: 10px 30px;
    border-right: 1px solid black;
    grid-column: 4 / 5;
    display: flex;
    align-items: stretch;
    @media (max-width: 1050px) {
      grid-row: 4 / 5;
      grid-column: 1 / 5;
      padding: 10px;
      align-items: start;
      border-right: none;
    }
`

const LandingPadConrtolButton = styled.button`
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
      @media (max-width: 1050px) {
        font-size: 20px;
      }
    }
    @media (max-width: 1050px) {
        font-size: 20px;
        padding: 20px 0px;
      }
`;

const LandingPadConrtolButtonDisabled = styled.button`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: grey;
    background-color: white;
    flex-grow: 1;
    border: 1px solid black;    
    border-radius: 5px;
    @media (max-width: 1050px) {
        font-size: 20px;
        padding: 20px;
    }
`

export {
  LandingPadControlDiv,
  LandingPadConrtolButton,
  LandingPadConrtolButtonDisabled,
};
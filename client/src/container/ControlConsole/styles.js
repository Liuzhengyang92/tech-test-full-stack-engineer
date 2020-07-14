import styled from 'styled-components';

const ControlConsoleContainer = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: white;
    background-color: white;
    grid-row: 3 / 4;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: stretch;
    align-items: stretch;
    border: 1px solid black;   
    @media (max-width: 1050px) {
      grid-row: 1 / 5;
      grid-columm: 3 / 4;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
`;

export {
  ControlConsoleContainer,
};
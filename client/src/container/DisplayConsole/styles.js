import styled from 'styled-components';

const DisplayConsoleContainer = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: white;
    background-color: white;
    grid-row: 1 / 3;
    width: 100%;
    box-sizing: border-box;
    display: felx;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid black;
    position: relative;
    svg, span {
        padding-left: 10px;
    }
    @media (max-width: 1050px) {
      grid-row: 1 / 5;
      grid-column: 1 / 3;
      font-size: 20px;
    }
`;

export {
  DisplayConsoleContainer,
};
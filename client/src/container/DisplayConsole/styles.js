import styled from 'styled-components';

const DisplayConsoleContainer = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: white;
    background-color: white;
    grid-row: 1 / 3;
    display: felx;
    flex-wrap: wrap;
    align-items: center;
    border: 1px solid black;
    svg, span {
        padding-left: 10px;
    }
`;

export {
  DisplayConsoleContainer,
};
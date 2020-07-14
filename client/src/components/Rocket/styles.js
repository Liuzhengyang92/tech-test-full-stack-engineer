import styled from 'styled-components';

const RocketDiv = styled.div`
    padding: 10px 30px;
    border-right: 1px solid black;
    grid-column: 2 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1050px) {
      grid-row: 2 / 3;
      grid-column: 1 / 5;
      border-right: none;
      border-bottom: 1px solid black;
    }
`
export {
  RocketDiv,
};
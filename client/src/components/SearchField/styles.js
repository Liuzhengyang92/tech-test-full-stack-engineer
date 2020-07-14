import styled from 'styled-components';

const InputDiv = styled.div`
    padding: 10px 30px;
    grid-column: 3 / 4;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @media (max-width: 1050px) {
      grid-row: 3 / 4;
      grid-column: 1 / 5;
      padding: 10px;
    }
`;

const Input = styled.input`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: black;
    text-align: center;
    border: solid 1px #000;
    height: 60px;
    width: 80%;
    padding: 7px 33px;
    border-radius: 3px;
    color: #999;
    cursor: text;
  
    &:active,
    &:focus {
      text-align: left;
    }

    @media (max-width: 1050px) {
      font-size: 15px;
      height: 30px;
    }
`;

export {
  InputDiv,
  Input,
}
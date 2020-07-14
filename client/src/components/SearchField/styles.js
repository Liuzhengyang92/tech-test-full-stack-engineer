import styled from 'styled-components';

const InputDiv = styled.div`
    padding: 10px 30px;
    grid-column: 3 / 4;
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

export {
  InputDiv,
  Input,
}
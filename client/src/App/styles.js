import styled from 'styled-components';

const Application = styled.div`
    font-family: Roboto;
    font-weight: 300;
    font-size: 25px;
    font-style: italic;
    color: white;
    top: 20%;
    position: absolute;
    padding: 50px;
    svg, span {
        padding-left: 10px;
    }
`;

const Container = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding: 30px;
    display: grid;
    row-gap: 20px;
    grid-template-rows: repeat(3, 1fr);
    @media (max-width: 1050px) {
      grid-template-rows: repeat(4, 1fr);
      grid-template-columns: repeat(3, 1fr);
      padding: 10px;
    }
`

export {
    Application,
    Container,
};
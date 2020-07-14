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
`

export {
    Application,
    Container,
};
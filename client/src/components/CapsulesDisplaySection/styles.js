import styled from 'styled-components';

const CapsulesDisplaySectionDiv = styled.div`
    width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    padding: 30px;
    overflow-Y: scroll;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 30px;
    bottom: 30px;
    @media (max-width: 1050px) {
      padding: 10px;
      top: 5px;
    }
`

const CapsulesElementDiv = styled.div`
    color: black;
    background-color: lightgrey;
    font-size: 25px;
    width: 80%;
    padding: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 5px;
    span {
      height: 35px;
      display: flex;
      align-items: center;
      @media (max-width: 1050px) {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
      }
    }
    p {
      font-size: 20px;
      margin-right: 15px;
      @media (max-width: 1050px) {
        width: 100%;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 15px;
      }
    }
    @media (max-width: 1050px) {
      width: 100%;
      margin-bottom: 10px;
      align-items: center;
      font-size: 20px;
      padding: 5px;
    }
`

const CapsulesElementTitle = styled.div`
    font-size: 20px;
`

export {
  CapsulesDisplaySectionDiv,
  CapsulesElementDiv,
  CapsulesElementTitle
}
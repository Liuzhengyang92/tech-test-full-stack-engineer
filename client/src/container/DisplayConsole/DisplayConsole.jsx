import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DisplayConsoleContainer } from './styles';

const DisplayConsole = () => {
  const capsulesData = useSelector(state => state.spaceData.capsulesData);
  const landingPadData = useSelector(state => state.spaceData.landingPadData);
  console.log(landingPadData);
  return (
    <DisplayConsoleContainer>
    </DisplayConsoleContainer>
  )
}

export default DisplayConsole;
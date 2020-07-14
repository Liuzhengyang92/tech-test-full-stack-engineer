import React from 'react';
import { useSelector } from 'react-redux';
import { DisplayConsoleContainer } from './styles';
import CapsulesDisplaySection from '../../components/CapsulesDisplaySection/CapsulesDisplaySection';
import LandingPadDataDisplay from '../../components/LandingPadDataDisplay/LandingPadDataDisplay';

const DisplayConsole = () => {
  const capsulesData = useSelector(state => state.spaceData.capsulesData);
  const landingPadData = useSelector(state => state.spaceData.landingPadData);
  const displaySource = useSelector(state => state.spaceData.displaySource);
  return (
    displaySource === 'capsules' ? 
    <DisplayConsoleContainer>
      <CapsulesDisplaySection capsulesData={capsulesData}/>
    </DisplayConsoleContainer> : displaySource === 'landing' ?
    <DisplayConsoleContainer>
      <LandingPadDataDisplay landingPadData={landingPadData} />
    </DisplayConsoleContainer> : null
  )
}

export default DisplayConsole;
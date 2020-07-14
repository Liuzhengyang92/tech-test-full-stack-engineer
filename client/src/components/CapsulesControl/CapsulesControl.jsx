import React from 'react';
import { CapsulesControlDiv, CapsulesControlButton } from './styles';

const CapsulesControl = ({ requestCapsulesData }) => {
  return (
    <CapsulesControlDiv>
      <CapsulesControlButton
        onClick={ () => requestCapsulesData() }
      >
        Capsules
      </CapsulesControlButton>
    </CapsulesControlDiv>
  )
}

export default CapsulesControl;
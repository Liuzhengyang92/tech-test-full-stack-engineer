import React from 'react';
import { LandingPadControlDiv, LandingPadConrtolButton, LandingPadConrtolButtonDisabled } from './styles';

const CapsulesControl = ({ landingPadButtonStatus, requestLandingPadData }) => {
  return (
    <LandingPadControlDiv>
      {landingPadButtonStatus ? 
        <LandingPadConrtolButton
          onClick={requestLandingPadData}
        >
          Landing Pad
        </LandingPadConrtolButton> :
        <LandingPadConrtolButtonDisabled disabled>
          Landing Pad
        </LandingPadConrtolButtonDisabled>
      }
    </LandingPadControlDiv>
  )
}

export default CapsulesControl;
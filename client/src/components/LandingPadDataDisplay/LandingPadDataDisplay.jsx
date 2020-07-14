import React from 'react';
import { LandingPadDataDisplayDiv, LandingPadDataElementDiv, LandingPadDataError }
  from './styles';

const LandingPadDataDisplay = ({ landingPadData }) => {
  const { id, full_name, status, location } = landingPadData;
  return (
     id ? 
     <LandingPadDataDisplayDiv>
      <LandingPadDataElementDiv>
        <span><p>id: </p>{id}</span>
        <span><p>fullname: </p>{full_name}</span>
        <span><p>status: </p>{status}</span>
        <span><p>location: </p>{location.name}, {location.region}</span>
      </LandingPadDataElementDiv>
    </LandingPadDataDisplayDiv>
      : <LandingPadDataError>
        <p>No record found</p>
        <p>Please Check id</p>
      </LandingPadDataError>
  )
}

export default LandingPadDataDisplay;
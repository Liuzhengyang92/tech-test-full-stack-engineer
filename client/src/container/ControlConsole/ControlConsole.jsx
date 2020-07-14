import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ControlConsoleContainer } from './styles';
// import { ReactComponent as Rocket } from '../../assets/rocket.svg';
import CapsulesControl from '../../components/CapsulesControl/CapsulesControl';
import Rocket from '../../components/Rocket/Rocket';
import SearchField from '../../components/SearchField/SearchField';
import LandingPadControl from '../../components/LandingPadControl/LandingPadControl';
import { requestCapsulesData, requestLandingPadData } from '../../redux/actions';

const ControlConsole = () => {
  const invalidChars = ['#', '$', '%', '&'];
  const [landingPadButtonStatus, setLandingPadButtonStatus] = useState(true);
  const [searchField, setSearchField] = useState('');
  const dispatch = useDispatch();

  const validataLandingPadInput = (e) => {
    const searchFieldValue = e.target.value;
    setSearchField(searchFieldValue);
    let buttonStatus = true;
    for (let i=0; i<invalidChars.length; i++) {
      if ([...searchFieldValue].includes(invalidChars[i])) {
        buttonStatus = false;
      }
    }
    if (buttonStatus !== landingPadButtonStatus) {
      setLandingPadButtonStatus(buttonStatus);
    }
  }

  const onRequestCapsulesData = () => {
    requestCapsulesData(dispatch);
  }


  const onRequestLandingPadData = () => {
    requestLandingPadData(dispatch, searchField);
  }

  return (
    // <>
      <ControlConsoleContainer>
        <CapsulesControl requestCapsulesData={onRequestCapsulesData}/>
        <Rocket />
        <SearchField validataLandingPadInput={validataLandingPadInput} />
        <LandingPadControl landingPadButtonStatus={landingPadButtonStatus} requestLandingPadData={onRequestLandingPadData} />
      </ControlConsoleContainer>
    // </>
  )
}

export default ControlConsole;
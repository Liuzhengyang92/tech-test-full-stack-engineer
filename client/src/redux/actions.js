import {
  UPDATE_CAPSULES_DATA,
  UPDATE_LANDING_PAD_DATA
} from './constants';

export const requestCapsulesData = (dispatch) => {
  fetch('http://localhost:4000/capsules')
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_CAPSULES_DATA, payload: data }))
}

export const requestLandingPadData = (dispatch, landingPadID) => {
  fetch(`http://localhost:4000/launch?id=${landingPadID}`)
    .then(response => response.json())
    .then(data => dispatch({ type: UPDATE_LANDING_PAD_DATA, payload: data }))
}
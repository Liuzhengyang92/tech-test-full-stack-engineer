import React from 'react';
import { RocketDiv } from './styles';
import { ReactComponent as RocketSvg } from '../../assets/rocket.svg';

const Rocket = () => {
  return (
    <RocketDiv>
      <RocketSvg style={{ fill: '#003366', width: "100%", maxHeight: "100%" }}/>
    </RocketDiv>
  )
}

export default Rocket;
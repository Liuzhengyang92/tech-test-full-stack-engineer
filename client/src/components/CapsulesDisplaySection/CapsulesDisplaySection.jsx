import React from 'react';
import { CapsulesDisplaySectionDiv, CapsulesElementDiv } from './styles';

const CapsulesDisplaySection = ({ capsulesData }) => {
  capsulesData.sort((a, b) => a.original_launch_unix - b.original_launch_unix)
  return (
    <CapsulesDisplaySectionDiv>
      {capsulesData.map(capsulesElement => {
        const {capsule_id, capsule_serial, details, landings, original_launch, reuse_count, status, type} = capsulesElement;
        return (
          <CapsulesElementDiv
            key={capsulesData.capsule_id}
          >
            <span><p>id: </p>{capsule_id}</span>
            <span><p>serial: </p>{capsule_serial}</span>
            <span><p>details: </p>{details}</span>
            <span><p>landings: </p>{landings}</span>
            <span><p>original launch: </p>{original_launch}</span>
            <span><p>reuse count: </p>{reuse_count}</span>
            <span><p>status: </p>{status}</span>
            <span><p>type: </p>{type}</span>
          </CapsulesElementDiv>
        )
      })}
    </CapsulesDisplaySectionDiv>
  );
}

export default CapsulesDisplaySection;
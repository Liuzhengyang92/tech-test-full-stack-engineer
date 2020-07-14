import React from 'react';
import { Input, InputDiv } from './styles';

const SearchField = ({ validataLandingPadInput }) => {
  return (
    <InputDiv>
      <Input 
        placeholder="text"
        onChange={validataLandingPadInput}
      />
    </InputDiv>
  )
}

export default SearchField;
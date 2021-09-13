import React from 'react';
import { FC } from 'react';
import styled from '@emotion/styled';
import styling from './styling/styling';

const StyledFilter = styled.input`
  border: none;
  border-bottom: 1px solid black;
  background: none;
  padding: 1rem;
  &:focus {
    outline: none;
  }
`;

type FilterProps = {
  filterPhrase: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Filter: FC<FilterProps> = ({ filterPhrase, handleChange }) => {
  return <StyledFilter value={filterPhrase} onChange={handleChange} type="text" placeholder="Filter todos ..." />;
};

export default Filter;

import React from 'react';
import { FC } from 'react';
import styled from '@emotion/styled';

const BaseDeleteSize = 0.8;
const deleteSize = `${BaseDeleteSize}rem`;

const StyledDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${deleteSize};
  height: ${deleteSize};
  border-radius: ${deleteSize};
  padding: .4rem;
  font-weight: 600;
  color: #454545;
  background-color: #cdcdcd;
  transform: scale(3);
  cursor: pointer;
  opacity: .15;
  &:hover {
    color: #ffcdcd;
    background-color: #ff4545;
    opacity: .2;
  }
`;

type DeleteTypes = {
  handleDelete: React.MouseEventHandler<HTMLDivElement>;
}

const Delete:FC<DeleteTypes> = ({ handleDelete }) => {
  return (
    <StyledDelete onClick={handleDelete}>
      &times;
    </StyledDelete>
  );
};

export default Delete;

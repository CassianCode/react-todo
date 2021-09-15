import React from 'react';
import { FC } from 'react';
import styled from '@emotion/styled';
import styling from './styling/styling';
import { ButtonType } from '../types';

const StyledButton = styled.button`
  border: none;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: ${styling.shapes.corner};
  background-color: #fff;
  box-shadow: ${styling.decoration.shadow};
  float: right;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const Button:FC<ButtonType> = ({ title, handleClick }) => {
  return <StyledButton onClick={handleClick}>{title}</StyledButton>;
};

export default Button;

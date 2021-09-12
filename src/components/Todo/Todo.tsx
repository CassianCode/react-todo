import React from 'react';
import { FC } from 'react';
import styled from '@emotion/styled';
import styling from '../styling/styling';
import Delete from './Delete';

type TodoProps = {
    id: number;
    content: string;
    done: boolean;
    handleClick: React.MouseEventHandler<HTMLDivElement>;
  };

const StyledTodo = styled.div<{done: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${styling.gaps.halfGap};
  border-radius: 8px;
  background-color: ${props => props.done ? `#f2f2f2 `: `#fff`};
  color: ${props => props.done ? `rgba(0, 0, 0, .3)` : `#000`};
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  margin-bottom: ${styling.gaps.halfGap};
  cursor: pointer;
  & p {
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
  }
`;


const Todo: FC<TodoProps> = ({ id, content, done, handleClick }) => {
  return (
    <StyledTodo done={done} onClick={handleClick}>
      <p>{content}</p>
      <Delete />
    </StyledTodo>
  );
};

export default Todo;

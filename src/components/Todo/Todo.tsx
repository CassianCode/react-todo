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
  handleDelete: React.MouseEventHandler<HTMLDivElement>;
};

const StyledTodo = styled.div<{ done: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: ${styling.shapes.corner};
  background-color: ${(props) => (props.done ? styling.colors.stealth : `#fff`)};
  color: ${(props) => (props.done ? styling.colors.textStealth : `#000`)};
  box-shadow: ${styling.decoration.shadow};
  margin-bottom: ${styling.gaps.halfGap};
  cursor: pointer;
  & > div {
    padding: ${styling.gaps.halfGap};
  }
  & > div:first-child {
    width: 100%;
  }
  & p {
    text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
    margin-right: 1rem;
  }
`;

const Todo: FC<TodoProps> = ({ id, content, done, handleClick, handleDelete }) => {
  return (
    <StyledTodo done={done}>
      <div onClick={handleClick}>
        <p>{content}</p>
      </div>
      <div>
        <Delete handleDelete={handleDelete} />
      </div>
    </StyledTodo>
  );
};

export default Todo;

import React from 'react';
import { FC } from 'react';
import styled from '@emotion/styled';
import styling from './styling/styling';
import Button from './Button';

const StyledCreateInput = styled.textarea`
  border: none;
  background: none;
  resize: none;
  width: 100%;
  border-radius: ${styling.shapes.corner};
  background-color: ${styling.colors.stealth};
  box-shadow: ${styling.decoration.shadow};
  padding: ${styling.gaps.halfGap};
  color: ${styling.colors.textStealth};
  &:focus {
    outline: 1px solid black;
    color: #000;
  }
`;

type CreateProps = {
  createValue: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleCreate: React.MouseEventHandler<HTMLButtonElement>;
};

const Create: FC<CreateProps> = ({ createValue, handleChange, handleCreate }) => {
  return (
    <form>
        <StyledCreateInput placeholder="I want to..." value={createValue} onChange={handleChange} />
      <Button title={'add'} handleClick={handleCreate} />
    </form>
  );
};

export default Create;

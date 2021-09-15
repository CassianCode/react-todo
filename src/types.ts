import React from "react";

export type TodoType = {
  id: number;
  content: string;
  done: boolean;
};

export type ButtonType = {
  title: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}


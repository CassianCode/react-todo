import React from 'react';
import { useState, useEffect } from 'react';
import TodoType from '../types';
import todoService from '../service/todoService';
import Todo from './Todo/Todo';

const List = () => {
  // define the types for "todos" state

  const [todos, setTodos] = useState<TodoType[]>();
  // "TodoType[]" means an array of whatever we defined as "TodoType"
  // in this case an array of objects

  useEffect(() => {
    console.log('useEffect List');

    todoService.getAll().then((data) => {
      setTodos(data);
      console.log('useEffect List data: ', data);
    });
  }, []);

  const toggleDone = (id: number) => {
    const entry = { ...todos!.find!((todo) => todo.id === id) } as TodoType;
    entry.done = !entry.done;
    console.log('entry: ', entry);

    todoService.putDone(entry, id).then((data) => {
      console.log('toggled: ', id);
      setTodos(todos?.map((todo) => (todo.id !== data.id ? todo : data)));
    });
  };

  return (
    <>
      {
        todos &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.content}
              done={todo.done}
              handleClick={() => toggleDone(todo.id)}
            />
          ))
        // types for todo can be inferred from "TodoType" thanks to defining them above for the "todos" state

        // handleClick:
        // brackets with argument would make this a function call: handleClick={toggleDone(todo.id)} instead of handleClick={toggleDone} which refers to the function but does not call it
        // so add () =>
        // which is a function (not a function call)
        // that would then execute toggleDone(todo.id) when called itself

        // onClick:
        // onClick only works on actual HTML elements
        // in the Todo.tsx component we use emotion to create a styled div as outer Element
        // styled components with emotion result work as actual HTML elements
        // so onClick is added to the styled component and then passed up to parent <Todo>
      }
    </>
  );
};

export default List;

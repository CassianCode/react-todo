import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import styled from '@emotion/styled';
import styling from './components/styling/styling';
import { TodoType } from './types';
import { Wrapper } from './components/Wrapper';
import Header from './components/Header';
import Todo from './components/Todo/Todo';
import Filter from './components/Filter';
import Create from './components/Create';
import todoService from './service/todoService';

const GridStructure = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: ${styling.gaps.halfGap};
  grid-template-rows: max-content;
  width: 100%;
`;

const GridHead = styled.div`
  grid-column: 1/4;
`;

const GridTodos = styled.div`
  grid-column: 1/3;
`;

const GridActions = styled.div`
  grid-column: 3/4;
  position: sticky;
  top: ${styling.gaps.gap};
  align-self: flex-start;
  & > * {
    margin-bottom: ${styling.gaps.halfGap};
    width: 100%;
  }
`;

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>();
  // "TodoType[]" means an array of whatever we defined as "TodoType"
  // in this case an array of objects
  const [todoCreate, setTodoCreate] = useState<string>('');
  const [todoFilter, setTodoFilter] = useState<string>('');

  useEffect(() => {
    console.log('useEffect List');

    todoService.getAll().then((data) => {
      setTodos(data);
      console.log('useEffect List data: ', data);
    });
  }, []);

  const createChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    console.log('create change: ', e.currentTarget.value);
    setTodoCreate(e.currentTarget.value);
  };

  const addTodo = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('create todo');
    todoService.postTodo(todoCreate).then((data) => {
      console.log('created: ', data);
      setTodos([data].concat(todos));
      setTodoCreate('');
    });
  };

  const toggleDone = (id: number) => {
    const entry = { ...todos!.find!((todo) => todo.id === id) } as TodoType;
    entry.done = !entry.done;
    console.log('entry: ', entry);

    todoService.putDone(entry, id).then((data) => {
      console.log('toggled: ', id);
      setTodos(todos?.map((todo) => (todo.id !== data.id ? todo : data)));
    });
  };

  const deleteTodo = (id: number) => {
    console.log('delete: ', id);
    todoService.deleteTodo(id).then(() => {
      console.log('deleted: ', id);
      setTodos([...todos!].filter((todo) => todo.id !== id));
    });
  };

  const filterChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('filter change: ', e.currentTarget.value);
    setTodoFilter(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <GridStructure>
        <GridHead>
          <Header />
        </GridHead>
        <GridTodos>
          {
            todos &&
              todos
                .filter((todo) => todoFilter == '' || todo.content.toLowerCase().includes(todoFilter.toLowerCase()))
                .map((todo) => (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    content={todo.content}
                    done={todo.done}
                    handleClick={() => toggleDone(todo.id)}
                    handleDelete={() => deleteTodo(todo.id)}
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
        </GridTodos>
        <GridActions>
          <Create createValue={todoCreate} handleChange={createChange} handleCreate={addTodo} />
          <Filter filterPhrase={todoFilter} handleChange={filterChange} />
        </GridActions>
      </GridStructure>
    </Wrapper>
  );
};

export default App;

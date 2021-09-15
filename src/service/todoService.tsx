import { TodoType } from '../types';

const baseURL = 'http://localhost:3001/todos';

const getAll = () => {
  return fetch(baseURL).then((res) => res.json());
};

const postTodo = (content: string) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ content: content, done: false }),
  }).then((res) => res.json());
};

const putDone = (entry: TodoType, id: number) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(entry),
  }).then((res) => res.json());
};

const deleteTodo = (id: number) => {
  return fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  }).then((res) => res.json());
};

export default { getAll, postTodo, putDone, deleteTodo };

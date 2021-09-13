import { useState } from 'react';
import styled from '@emotion/styled';
import styling from './styling/styling';
import Header from './Header';
import List from './List';
import Filter from './Filter';
import Create from './Create/Create';

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
  }
`;

const Grid = () => {
  const [todoFilter, setTodoFilter] = useState<string>('');
  console.log('filter phrase state: ', todoFilter);

  const filterChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('filter change: ', e.currentTarget.value);
    setTodoFilter(e.currentTarget.value);
  }

  return (
    <GridStructure>
      <GridHead>
        <Header />
      </GridHead>
      <GridTodos>
        <List filterPhrase={todoFilter} />
      </GridTodos>
      <GridActions>
        <Filter filterPhrase={todoFilter} handleChange={filterChange} />
        <Create />
      </GridActions>
    </GridStructure>
  );
};

export default Grid;

import styled from '@emotion/styled';
import styling from './styling/styling';
import Header from './Header';
import List from './List';
import Filter from './Filter';
import Create from './Create/Create';

const GridStructure = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'todos  actions';
  grid-gap: ${styling.gaps.halfGap};
  grid-template-rows: max-content;
  width: 100%;
`;

const GridHead = styled.div`
  grid-area: header;
`;

const GridTodos = styled.div`
  grid-area: todos;
`;

const GridActions = styled.div`
  grid-area: actions;
  position: sticky;
  top: ${styling.gaps.gap};
  align-self: flex-start;
`;

const Grid = () => {
  return (
    <GridStructure>
      <GridHead>
        <Header />
      </GridHead>
      <GridTodos>
        <List />
      </GridTodos>
      <GridActions>
        <Filter />
        <Create />
      </GridActions>
    </GridStructure>
  );
};

export default Grid;

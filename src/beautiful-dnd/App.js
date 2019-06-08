import { DragDropContext } from 'react-beautiful-dnd';
import Hitbox from './Hitbox';
import Item from './Item';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const appStyle = css`
  margin: 0 auto;
  width: 640px;
`;

const sectionStyle = css`
  padding: 5px;
  position: relative;
`;

const headingStyle = css`
  margin: 0 0 15px;
  font-size: 16px;
  font-weight: 500;
`;

const onDragEnd = result => {
  // do stuff here (this function is required)
}

function App() {
  return (
    <DragDropContext
      // onDragStart
      // onDragUpdate
      onDragEnd={onDragEnd}
    >
      <div className="App" css={appStyle}>
        <section css={sectionStyle}>
          <h1 css={headingStyle}>React-Beautiful-Dnd Implementation</h1>
          <Hitbox>
            <Item 
              id={9001}
              posX={25} 
              posY={25} 
            /> 
          </Hitbox>  
          <Hitbox bgColor="skyblue" />
        </section>
      </div>
    </DragDropContext>
  );
}

export default App;
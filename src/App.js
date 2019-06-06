import React from 'react';
import Hitbox from 'Hitbox';
import Item from 'Item';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const appStyle = css`
  margin: 0 auto;
  border: 2px solid black;
  width: 800px;
`;

function App() {
  return (
    <div className="App" css={appStyle}>
      <Item posX={100} posY={150} />
      <Hitbox />
    </div>
  );
}

export default App;

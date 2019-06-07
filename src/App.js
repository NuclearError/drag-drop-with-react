import Hitbox from './vanilla/Hitbox';
import Item from './vanilla/Item';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const appStyle = css`
  margin: 0 auto;
  border: 2px solid black;
  width: 640px;
`;

const sectionStyle = css`
  padding: 5px;
  position: relative;
  border-bottom: 2px solid black;

  &:nth-child(even) {
    background-color: #efefef;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const headingStyle = css`
  margin: 0 0 15px;
  font-size: 16px;
  font-weight: 500;
`;

function App() {
  return (
    <div className="App" css={appStyle}>
      <section css={sectionStyle}>
        <h1 css={headingStyle}>Vanilla React Implementation</h1>
        <Hitbox />
        <Item 
          posX={200} 
          posY={50} 
        />
      </section>
      <section css={sectionStyle}>
        <h1 css={headingStyle}>Library implementations to go here</h1>
      </section>
    </div>
  );
}

export default App;

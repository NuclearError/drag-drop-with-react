import Stage from './Stage';

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

function App() {
  return (
    <div className="App" css={appStyle}>
      <section css={sectionStyle}>
        <h1 css={headingStyle}>'Complex' DIY Implementation</h1>
        <Stage />
      </section>
    </div>
  );
}

export default App;

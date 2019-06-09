import { Component } from 'react';

import ReactCursorPosition, { INTERACTIONS } from 'react-cursor-position';

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

const RCPstyling = css`
  border: 1px solid red; 
  display: inline-block;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
        <div className="App" css={appStyle}>
          <section css={sectionStyle}>
            <h1 css={headingStyle}>DIY Implementation</h1>
            <ReactCursorPosition
              css={RCPstyling}
              activationInteractionMouse={INTERACTIONS.CLICK}
            >
              <Item 
                id="item-01"
                posX={0}
                posY={0}
              />
            </ReactCursorPosition>
          </section>
        </div>
    );
  }
}

export default App;
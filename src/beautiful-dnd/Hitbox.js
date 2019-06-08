import React, { Component } from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    width: 150px;
    height: 150px;
    background-color: BlueViolet;
    position: relative;

    > p {
        margin: 0 0 5px;
        position: absolute;
        font-size: 0.75rem;
        color: white;
        top: 45%;
        left: 15px;
        pointer-events: none;
        z-index: 1;
    }
`;

class Hitbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div 
        css={hitboxStyling} 
      >
        <p>Hitbox</p>
      </div>
    );
  }
}

export default Hitbox;

import React from 'react';
import { DropTarget } from 'react-dnd';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    width: 150px;
    height: 150px;
    background-color: deepskyblue;
    position: relative;

    > p {
        margin: 0;
        position: absolute;
        font-size: 0.75rem;
        color: black;
        top: 45%;
        left: 37%;
        pointer-events: none;
        z-index: 1;
    }
`;

function Hitbox() {
  return (
    <div 
      css={hitboxStyling} 
    >
      <p>Hitbox</p>
    </div>
  );
}

export default DropTarget(types, spec, collect)(Hitbox);

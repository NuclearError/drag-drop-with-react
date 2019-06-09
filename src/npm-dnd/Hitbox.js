import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    width: 150px;
    height: 150px;
    background-color: skyblue;
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

const onDragOver = (event) => {
    event.preventDefault();
  }
  const onDrop = (event) => {
    console.log("onDrop called");
    let taskName = event.dataTransfer.getData("taskName");
    console.log("dragged item dropped: ", taskName);
  }

function Hitbox() {
  return (
    <div 
        css={hitboxStyling} 
        onDragOver={event => onDragOver(event)}
        onDrop={event => onDrop(event)}
    >
      <p>Hitbox</p>
    </div>
  );
}

export default Hitbox;

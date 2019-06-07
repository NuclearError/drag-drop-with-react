import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: absolute;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: rgba(214, 121, 185, 0.4);
    cursor: pointer;
    z-index: 1;

    > p {
        margin: 0;
        position: absolute;
        font-size: 0.75rem;
        color: black;
        top: 40%;
        left: 35%;
        pointer-events: none;
    }
`;

const onDragStart = (event, taskName) => {
    console.log("onDragStart called: taskName = ", taskName);
    event.dataTransfer.setData("taskName", taskName);
}

const Item = ({ posX, posY }) => (
    <div 
        css={[
            itemStyling,
            posX && css`left: ${posX}px;`,
            posY && css`top: ${posY}px;`,
        ]}
        draggable="true"
        onDragStart = {event => onDragStart(event, 'boop')}
    >
        <p>Item</p>
    </div>
);

Item.defaultProps = {
    posX: 0,
    posY: 0,
  };
  
  Item.propTypes = {
    posX: PropTypes.number,
    posY: PropTypes.number,
  };

export default Item;

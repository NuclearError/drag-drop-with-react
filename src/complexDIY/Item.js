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

const Item = ({ onClick, id, positions }) => (
    <div 
        css={[
            itemStyling,
            css`
                top: ${positions}[${id}].y,
                left: ${positions}[${id}].x,
            `,
        ]}
        draggable="true"
        onDragStart={event => onDragStart(event, 'boop, internal item function called')}
        onClick={id => onClick(id)}
    >
        <p>Item</p>
    </div>
);

Item.defaultProps = {
    onClick: () => {},
};

Item.propTypes = {
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    // positions: not sure, check proptype --> just an "object"
};

export default Item;
/*

// make this div into the item. Item props should be ID and an onClick function. 
// The onCLick is optional but the ID is required
// Also needs this.state.draggable positions ???? this would be good to pass down as context rather than a prop

<div
css={{
  background: 'magenta',
  position: 'absolute',
  top: this.state.draggablePositions[dragDiv1Id].y,
  left: this.state.draggablePositions[dragDiv1Id].x,
  height: 50,
  width: 50
}}
onClick={() => {
  if (!this.state.dragged) {
    this.setState({ dragged: dragDiv1Id })
  } else if (this.state.dragged === dragDiv1Id) {
    this.setState({ dragged: null })
  }
}}
/>
*/

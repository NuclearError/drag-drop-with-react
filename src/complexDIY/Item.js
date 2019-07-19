import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: green;
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
        color: white;
    }
`;

const Item = ({ onClick, id, positions }) => {
    return (
    <div 
        css={[
            itemStyling,
            css`
                top: ${positions[id].y}px;
                left: ${positions[id].x}px;
            `,
        ]}
        onClick={(event, id) => onClick(event, id)}
    >
        <p>Item</p>
    </div>
)};

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

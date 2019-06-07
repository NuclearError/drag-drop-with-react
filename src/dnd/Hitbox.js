import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import ItemTypes from './ItemTypes';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    width: 150px;
    height: 150px;
    background-color: deepskyblue;
    position: relative;

    > p {
        margin: 0 0 5px;
        position: absolute;
        font-size: 0.75rem;
        color: black;
        top: 45%;
        left: 2px;
        pointer-events: none;
        z-index: 1;
    }
`;

/**
 * Specifies the drop target contract.
 * All methods are optional.
 */
const hitboxTarget = {
  // (everything is optional)
}

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType(),
  }
}

class Hitbox extends Component {
  constructor(props) {
      super(props);
      this.boxRef = React.createRef();
  }
  render() {
    const { canDrop, connectDropTarget, isOver, itemType} = this.props;
    return (
      <div 
        css={hitboxStyling} 
        ref={boxRef => connectDropTarget(boxRef)}
      >
        {isOver && canDrop && <p>Is over the hitbox!</p>}
        {!isOver && itemType && <p>item type = {itemType}</p>}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.ITEM, hitboxTarget, collect)(Hitbox);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

import ItemTypes from './ItemTypes';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: absolute;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: deeppink;
    /* background-image: url("img/img_75x75.jpg"); */
    cursor: pointer;
    z-index: 1;

    > p {
        margin: 0;
        position: absolute;
        font-size: 0.75rem;
        color: white;
        top: 40%;
        left: 35%;
        pointer-events: none;
    }
`;

const itemSource = {
    beginDrag(props) {
        // Return the data describing the dragged item
        const draggedItem = { id: props.id };
        return draggedItem;
      },
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDragSource: connect.dragSource(),
    }
  }

class Item extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
    }
    render() {
        const { connectDragSource, id, posX, posY } = this.props;
        console.log('this.props = ', this.props);
        return (
            <div
                css={[
                    itemStyling,
                    posX && css`left: ${posX}px;`,
                    posY && css`top: ${posY}px;`,
                ]}
                id={id}
                ref={itemRef => connectDragSource(itemRef)}
            >
                <p>Item</p>
            </div>
        );
    }
}

Item.defaultProps = {
    posX: 0,
    posY: 0,
  };
  
  Item.propTypes = {
    id: PropTypes.number.isRequired,
    posX: PropTypes.number,
    posY: PropTypes.number,
  };

// export default Item;
export default DragSource(ItemTypes.ITEM, itemSource, collect)(Item);
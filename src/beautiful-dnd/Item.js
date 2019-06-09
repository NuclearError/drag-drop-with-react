import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: relative;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    /* background-image: url("img/img_75x75.jpg"); */
    cursor: pointer;
    z-index: 1;

    > p {
        margin: 0;
        position: absolute;
        font-size: 0.75rem;
        color: inherit;
        top: 40%;
        left: 35%;
        pointer-events: none;
    }
`;

// I think you can change where you put the dragHandleProps
// according to which parts of item are specifically draggable
// eg. like if you had to grab it from a specific corner

class Item extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
    }
    render() {
        const { bgColor, color, content, id, posX, posY } = this.props;
        /* index values are required for Draggable thingies */
        return (
            <Draggable draggableId={id} index={0}>
                {(provided) => (
                    <div
                        css={[
                            itemStyling,
                            bgColor && css`background-color: ${bgColor};`,
                            color && css`color: ${color};`,
                            posX && css`left: ${posX}px;`,
                            posY && css`top: ${posY}px;`,
                        ]}
                        id={id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <p>{content}</p>
                    </div>
                )}
            </Draggable>
        );
    }
}

Item.defaultProps = {
    bgColor: "pink",
    color: "black",
    content: "",
    posX: 0,
    posY: 0,
  };
  
  Item.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    posX: PropTypes.number,
    posY: PropTypes.number,
  };

export default Item;
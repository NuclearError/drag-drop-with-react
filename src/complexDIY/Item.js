import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
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

const defaultColors = css`
    background-color: red;

    &:hover {
        background-color: green;
    }
`;

const draggedColors = css`
    background-color: blue;
`;

const Item = ({ onClick, id, isBeingDragged, positions }) => (
    <div 
        css={[
            itemStyling,
            css`
                top: ${positions[id].y}px;
                left: ${positions[id].x}px;
            `,
            (isBeingDragged ? draggedColors : defaultColors)
        ]}
        onClick={(event) => onClick(id)}
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
    isBeingDragged: PropTypes.bool.isRequired,
    // positions: not sure, check proptype --> just an "object"
};

export default Item;

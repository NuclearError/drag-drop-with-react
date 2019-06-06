import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: relative;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: rgba(214, 121, 185, 0.4);

    > p {
        margin: 0;
        font-size: 0.75rem;
        color: white;
    }
`;

const Item = ({ posX, posY }) => (
    <div css={[
        itemStyling,
        posX && css`left: ${posX}px;`,
        posY && css`left: ${posY}px;`,
    ]}>
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

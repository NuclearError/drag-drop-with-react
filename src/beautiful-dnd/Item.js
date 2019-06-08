import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: absolute;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: MediumVioletRed;
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

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, posX, posY } = this.props;
        return (
            <div
                css={[
                    itemStyling,
                    posX && css`left: ${posX}px;`,
                    posY && css`top: ${posY}px;`,
                ]}
                id={id}
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

export default Item;
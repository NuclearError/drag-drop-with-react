import { Component } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const itemStyling = css`
    position: relative;
    width: 80px; /* same dimensions as image asset */
    height: 80px;

    > p {
        margin: 0;
        position: absolute;
        font-size: 0.75rem;
        color: inherit;
        top: 30%;
        left: 25%;
        pointer-events: none;
    }
`;

const imgStyling = css`
    position: absolute;
    top: 0;
    left:0;
`;

class Item extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { bgColor, color, id, posX, posY } = this.props;
        const {
            detectedEnvironment: {
                isMouseDetected = false,
                isTouchDetected = false
            } = {},
            elementDimensions: {
                width = 0,
                height = 0
            } = {},
            position: {
                x = 0,
                y = 0
            } = {},
            isActive = false,
            isPositionOutside = false
          } = this.props;

          console.log("element dimensions = ", width, height);
        return (
            <div
                css={[
                    itemStyling,
                    bgColor && css`background-color: ${bgColor};`,
                    color && css`color: ${color};`,
                    css`left: ${!isActive ? '-40px' : (x - 40)+'px'};`,
                    css`top: ${!isActive ? '-40px' : (y - 40)+'px'};`,
                ]}
                id={id}
            >
                
                <p>
                    {isActive ? 'ACTIVE' : 'NOPE'} <br/>
                    x: {x} <br/>
                    y: {y}
                </p>
            </div>
        );
    }
}

Item.defaultProps = {
    bgColor: "pink",
    color: "black",
  };
  
  Item.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
  };

export default Item;
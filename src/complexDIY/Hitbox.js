import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
	z-index: 1;
	border: 1px solid black;
`;

const defaultColor = css`background-color: violet;`;
const collisionColor = css`background-color: deepskyblue;`;

const Hitbox = ({ collisionDetected, id, positions }) => (
	<div 
		css={[
			hitboxStyling, 
			css`
				top: ${positions[id].y}px;
				left: ${positions[id].x}px;
			`,
			collisionDetected ? collisionColor : defaultColor
		]} 
		id={id}
	/>
);

Hitbox.defaultProps = {
    collisionDetected: false,
};

Hitbox.propTypes = {
	collisionDetected: PropTypes.bool,
    id: PropTypes.string.isRequired,
};

export default Hitbox;

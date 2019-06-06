import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    width: 150px;
    height: 150px;
    background-color: skyblue;
`;

function Hitbox() {
  return (
    <div css={hitboxStyling} />
  );
}

export default Hitbox;

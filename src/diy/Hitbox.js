import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    margin-right: 20px;
    width: 150px;
    height: 150px;
    position: relative;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }
`;

class Hitbox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, bgColor, data, id} = this.props;
    return (
      <>
        <div
          css={[hitboxStyling, css`background-color: ${bgColor};`]} 
          id={id}
        >
          {children}
        </div>
        <p>{data}</p>
      </>
    );
  }
}

Hitbox.defaultProps = {
  children: null,
  bgColor: 'PowderBlue',
  data: null,
};

Hitbox.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  data: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Hitbox;

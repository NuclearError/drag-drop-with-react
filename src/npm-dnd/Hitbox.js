import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-drag-and-drop';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const hitboxStyling = css`
    width: 150px;
    height: 150px;
    background-color: skyblue;
    position: relative;

    > p {
        margin: 0;
        position: absolute;
        font-size: 0.75rem;
        color: black;
        top: 45%;
        left: 37%;
        pointer-events: none;
        z-index: 1;
    }
`;

class Hitbox extends Component {

  constructor(props) {
    super(props);
  }

  onDrop(data) {
    console.log("onDrop called: ", data);
  }
  
  render() {
    const { id } = this.props;
    return (
      <Droppable
        id={id}
        types={['item']}
        css={hitboxStyling} 
        onDrop={this.onDrop.bind(this)}
        
      >
        <p>Hitbox</p>
      </Droppable>
    );
  }
}

Hitbox.propTypes = {
  id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
  ]).isRequired,
};

export default Hitbox;

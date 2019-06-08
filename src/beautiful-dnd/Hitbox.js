import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

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
    this.boxRef = React.createRef();
  }

  // provided.droppableProps (see docs for provided properties)
  // provided.placeholder is used to expand the space when dragging n dropping

  render() {
    const { children, bgColor } = this.props;
    return (
      /* Note that the droppableId needs to be unique */
      <Droppable droppableId={1}>
        {(provided) => (
          <div
            css={[hitboxStyling, css`background-color: ${bgColor};`]} 
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {provided.placeholder}
            {children}
          </div>
        )}
      </Droppable>
    );
  }
}

Hitbox.defaultProps = {
  children: null,
  bgColor: 'PowderBlue',
};

Hitbox.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
};

export default Hitbox;

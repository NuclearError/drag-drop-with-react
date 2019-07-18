import React, { Component } from 'react';
import Item from './Item';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const stageStyle = css`
  margin: 0 auto;
  width: 640px;
  border: 3px dashed;
`;

const item01id = 'complexItemId12345';

class Stage extends Component {
  constructor(props) {
    super(props);
    this.stageElement = React.createRef()
    this.state = {
      dragged: null,
      draggablePositions: {
        [item01id]: { x: 0, y: 0 }
      }
    }
  }

  onMouseMove = e => {
    if (this.state.dragged) {
      this.setState({
        draggablePositions: {
          ...this.state.draggablePositions,
          [this.state.dragged]: {
            x: e.pageX - this.stageElement.current.offsetLeft - 25,
            y: e.pageY - this.stageElement.current.offsetTop - 25
          }
        }
      })
    }
  }

  onItemClick = itemId => {
    // NB. make sure "this" refers to the item that was just clicked
    if (!this.state.dragged) {
      this.setState({ dragged: itemId })
    } else if (this.state.dragged === itemId) {
      this.setState({ dragged: null })
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  render() {
    const { draggablePositions } = this.state;
    console.log("Typeof draggablePositions = ", typeof draggablePositions);
    return (
        <div className="Stage" css={stageStyle} ref={this.stageElement}>
          <Item positions={draggablePositions} id={item01id} onClick={this.onItemClick} />
        </div>
    );
  }
}

export default Stage;

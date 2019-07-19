import React, { Component } from 'react';
import Item from './Item';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const stageStyle = css`
  margin: 0 auto;
  width: 640px;
  position: relative;
  height: 500px;
  background-color: MistyRose;
`;

const dragDiv1Id = 'draggable-div-1';
const dragDiv2Id = 'draggable-div-2';

class Stage extends Component {
  constructor(props) {
    super(props);
    this.stageRef = React.createRef();
    this.state = {
      dragged: null,
      draggablePositions: {
        [dragDiv1Id]: { x: 50, y: 50 },
        [dragDiv2Id]: { x: 100, y: 100 },
      }
    }
  }

  onMouseMove = e => {
    if (this.state.dragged) {
      this.setState({
        draggablePositions: {
          ...this.state.draggablePositions,
          [this.state.dragged]: {
            x: e.pageX - this.stageRef.current.offsetLeft - 25,
            y: e.pageY - this.stageRef.current.offsetTop - 25
          }
        }
      })
    }
  }

  toggleDragged = (event, itemId) => {
    console.log("item clicked! Two args received: ");
    console.log("event = ", event);
    console.log("itemId = ", itemId);
    if (!this.state.dragged) {
      this.setState({ dragged: itemId })
    } else if (this.state.dragged === itemId) {
      this.setState({ dragged: null })
    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove)
  }

  render() {
    return (
        <div className="Stage" css={stageStyle} ref={this.stageRef}>

            {/* hardcoded div -> this is what the item component is copying */}
            <div
              css={{
                background: 'magenta',
                position: 'absolute',
                top: this.state.draggablePositions[dragDiv1Id].y,
                left: this.state.draggablePositions[dragDiv1Id].x,
                height: 50,
                width: 50
              }}
              onClick={() => {
                console.log("magenta item clicked");
                if (!this.state.dragged) {
                  this.setState({ dragged: dragDiv1Id })
                } else if (this.state.dragged === dragDiv1Id) {
                  this.setState({ dragged: null })
                }
              }}
            />

            <Item 
              id={dragDiv2Id} 
              onClick={this.blah} 
              positions={this.state.draggablePositions}
            />

        </div>
    );
  }
}

export default Stage;
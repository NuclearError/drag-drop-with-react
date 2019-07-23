import React, { Component } from 'react';
import Item from './Item';
import Hitbox from './Hitbox';

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
const hitboxv1Id = 'hitbox-1';

class Stage extends Component {
  constructor(props) {
    super(props);
    this.stageRef = React.createRef();
    this.state = {
      collision: false,
      dragged: null,
      draggablePositions: {
        [dragDiv1Id]: { x: 50, y: 50 },
        [dragDiv2Id]: { x: 100, y: 100 },
        [hitboxv1Id]: { x: 250, y: 150 },
      },
      radii: {
        [dragDiv2Id]: { radius: 25 },
        [hitboxv1Id]: { radius: 75 },
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
    // super fragile --> make it a bit smarter in knowing which things to check 
    this.collisionCheck(dragDiv2Id, hitboxv1Id);
  }

  toggleDragged = (itemId) => {
    if (!this.state.dragged) {
      this.setState({ dragged: itemId })
    } else if (this.state.dragged === itemId) {
      this.setState({ dragged: null })
    }
  }

  collisionCheck = (id1, id2) => {
    const combinedRadii = (this.state.radii[id1].radius +  this.state.radii[id2].radius);

    /*
      Originally the math for dx/dy was basically:
      this.state.draggablePositions[id1].x - this.state.draggablePositions[id2].x

      BUT in practise this meant the hitbox area was too far up and left by about half the objects in question. 

      By adding "- (combinedRadii / 2)" on the end, I was able to bring it back to where the objects actually are. I don't understand why a minus symbol worked better than a plus symbol though.
    */
    const dx = (this.state.draggablePositions[id1].x - this.state.draggablePositions[id2].x) - (combinedRadii / 2);
    const dy = (this.state.draggablePositions[id1].y - this.state.draggablePositions[id2].y) - (combinedRadii / 2);

    const distance = Math.sqrt(dx * dx + dy * dy);

    // TODO write this neater
    if (distance < combinedRadii) {
      this.setState({
        collision: true,
      });
    } else {
      this.setState({
        collision: false,
      });
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
            <Hitbox 
              collisionDetected={this.state.collision} 
              id={hitboxv1Id} 
              positions={this.state.draggablePositions} 
            />
            <Item 
              id={dragDiv2Id} 
              onClick={this.toggleDragged} 
              positions={this.state.draggablePositions}
              isBeingDragged={this.state.dragged === dragDiv2Id}
            />
        </div>
    );
  }
}

export default Stage;
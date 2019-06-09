import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import initialData from './initialData';
import Hitbox from './Hitbox';
import Item from './Item';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const appStyle = css`
  margin: 0 auto;
  width: 640px;
`;

const sectionStyle = css`
  padding: 5px;
  position: relative;
`;

const headingStyle = css`
  margin: 0 0 15px;
  font-size: 16px;
  font-weight: 500;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialData;

  }

  // onDragStart is an optional function of the DragDropContext
  onDragStart = result => {
    const { destination, source, draggableId } = result;
    // console.log("onDragStart: ");
    // console.log("source: ", source);
    // console.log("destination: ", destination);
  }

  // onDragEnd is a required function of the DragDropContext
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      console.log("No destination found.");
      return;
    }

    if ( destination.droppableId === source.droppableId ) {
      console.log("Destination is the same as source.");
      return;
    }

    const hitbox = this.state.hitboxes[source.droppableId];
    const newContents = Array.from(hitbox.contents);
    newContents.splice(source.index, 1);
    newContents.splice(destination.index, 0, draggableId);

    const newHitbox = {
      ...hitbox,
      contents: newContents,
    };

    const newState = {
      ...this.state,
      hitboxes: {
        ...this.state.hitboxes,
        [newHitbox.id]: newHitbox,
      }
    };

    this.setState(newState);
  }

  render() {    
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        // onDragUpdate
        onDragEnd={this.onDragEnd}
      >
        <div className="App" css={appStyle}>
          <section css={sectionStyle}>
            <h1 css={headingStyle}>React-Beautiful-Dnd Implementation</h1>
            {
              this.state.hitboxOrder.map(hitboxId => {
                const hitbox = this.state.hitboxes[hitboxId];
                const items = hitbox.contents.map(itemId => this.state.items[itemId]);

                return (
                  <Hitbox
                    key={hitbox.id}
                    id={hitbox.id}
                  >
                    {
                      items.map(item => 
                        <Item 
                          key={item.id} 
                          id={item.id} 
                          bgColor={item.bgColor}
                          color={item.color}
                          content={item.content}
                        />
                      )
                    }
                  </Hitbox>
                );
              })
            }
          </section>
        </div>
      </DragDropContext>
    );
  }
}

export default App;
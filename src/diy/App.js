import React, { Component } from 'react';

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

const dragDiv1Id = 'draggable-div-1';

class App extends Component {
  constructor(props) {
    super(props);
    this.appElement = React.createRef()
    this.state = {
      dragged: null,
      draggablePositions: {
        [dragDiv1Id]: { x: 0, y: 0 }
      }
    }
  }

  onMouseMove = e => {
    if (this.state.dragged) {
      this.setState({
        draggablePositions: {
          ...this.state.draggablePositions,
          [this.state.dragged]: {
            x: e.pageX - this.appElement.current.offsetLeft - 25,
            y: e.pageY - this.appElement.current.offsetTop - 25
          }
        }
      })
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
        <div className="App" css={appStyle} ref={this.appElement}>
          <section css={sectionStyle}>
            <h1 css={headingStyle}>DIY Implementation</h1>

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
                if (!this.state.dragged) {
                  this.setState({ dragged: dragDiv1Id })
                } else if (this.state.dragged === dragDiv1Id) {
                  this.setState({ dragged: null })
                }
              }}
            />
          </section>
        </div>
    );
  }
}

export default App;
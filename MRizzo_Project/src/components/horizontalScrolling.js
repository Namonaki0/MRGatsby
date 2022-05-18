import React, { Component } from "react"

class App extends Component {
  // Create state
  state = {
    xoffset: 0,
    yoffset: 0,
    delta: 10,
  }

  moveTitleToDown = () => {
    this.setState({ yoffset: this.state.yoffset + this.state.delta })
  }
  moveTitleToRight = () => {
    this.setState({ xoffset: this.state.xoffset + this.state.delta })
  }
  moveTitleToLeft = () => {
    this.setState({ xoffset: this.state.xoffset - this.state.delta })
  }
  moveTitleToUp = () => {
    this.setState({ yoffset: this.state.yoffset - this.state.delta })
  }

  render() {
    return (
      <div>
        {/* Element to Move Dynamically */}
        <h2
          style={{
            position: "absolute",
            left: `${this.state.xoffset}px`,
            top: `${this.state.yoffset}px`,
          }}
        >
          GeeksforGeeks
        </h2>

        {/* Move Controls */}
        <div style={{ marginTop: "80px" }}>
          <button onClick={this.moveTitleToRight}>Move Title To Right</button>
          <button onClick={this.moveTitleToDown}>Move Title To Down</button>
          <button onClick={this.moveTitleToLeft}>Move Title To Left</button>
          <button onClick={this.moveTitleToUp}>Move Title To Up</button>
        </div>
      </div>
    )
  }
}

export default App

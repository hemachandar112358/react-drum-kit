import "./Key.css";
import React from "react";

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.keyCode === this.props.keyCode) {
      const parent = this.audio.parentNode;
      parent.classList.add("playing");
      this.audio.play();
      this.audio.currentTime = 0;
      this.audio.addEventListener("ended", () => {
        parent.classList.remove("playing");
      });
    }
  };

  handleClick = () => {
    const parent = this.audio.parentNode;
    parent.classList.add("playing");
    this.audio.play();
    this.audio.currentTime = 0;
    this.audio.addEventListener("ended", () => {
      parent.classList.remove("playing");
    });
  };
  render() {
    return (
      // <div className="drum">{this.props.letter}</div>
      <div className="key" onClick={this.handleClick}>
        <p> {this.props.letter}</p>
        <audio
          id={this.props.letter}
          src={this.props.audioSrc}
          ref={(ref) => (this.audio = ref)}
        ></audio>
      </div>
    );
  }
}

export default Key;

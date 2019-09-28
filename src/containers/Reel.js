import React, { Component } from 'react';

class Reel extends Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      position: 0,
      lastPosition: null,
    }
  };

  forceUpdateHandler() {
    this.reset();
  };

  reset() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.start = this.setStartPosition();
    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);
  }


  static iconHeight = 121;
  multiplier = Math.floor(Math.random() * (4 - 1) + 1);
  // Uncomment for default start
  // start = this.setStartPosition(); 
  speed = Reel.iconHeight * this.multiplier;

  // Positioning Debugging
  setStartPosition() {
    if (this.props.debug && this.props.selectReil) {
      return (((this.props.sliderReil - this.props.selectReil) * Reel.iconHeight) * -1)
    }
    return ((Math.floor((Math.random() * 5))) * Reel.iconHeight) * -1;
  }

  moveBackground() {

    this.setState({
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100
    })
  }

  getSymbolFromPosition() {
    let { position } = this.state;
    const totalSymbols = 5;
    const maxPosition = (Reel.iconHeight * (totalSymbols - 1) * -1);
    let moved = ((this.props.timer / 100) * this.multiplier)
    let startPosition = this.start;
    let currentPosition = startPosition;

    for (let i = 0; i < moved; i++) {
      currentPosition -= Reel.iconHeight;

      if (currentPosition < maxPosition) {
        currentPosition = 0;
      }
    }

    this.props.onFinish(currentPosition);
  }

  tick() {
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.timer);
      this.getSymbolFromPosition();

    } else {
      this.moveBackground();
    }
  }

  componentDidMount() {
    clearInterval(this.timer);
    this.setState({
      position: this.start,
      timeRemaining: this.props.timer
    });

    this.timer = setInterval(() => {
      this.tick()
    }, 100);
  }




  render() {
    let { position, current } = this.state;
    return (
      <div className={'icons br1 ' + this.props.vibrate}
        style={{ backgroundPosition: '0px ' + position + 'px' }}>
      </div>


    )
  }


}
export default Reel
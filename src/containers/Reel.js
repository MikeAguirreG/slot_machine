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


  // Reset for spinning
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

  // Size of every icon
  static iconHeight = 121;
  multiplier = Math.floor(Math.random() * (4 - 1) + 1);


  // Uncomment for default start
  // start = this.setStartPosition(); 
  speed = Reel.iconHeight * this.multiplier;

  
  // Handles dedugging depending of the switch otherwise spins the reels reandonly
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

  // Throwing the position where the spinner lands
  getSymbolFromPosition() {
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

  // Allows validation while spinning
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
    let { position } = this.state;
    return (
      <div className={'icons br1 ' + this.props.vibrate}
        style={{ backgroundPosition: '0px ' + position + 'px' }}>
      </div>
    )
  }


}
export default Reel
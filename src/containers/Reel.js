import React, { Component } from 'react';

class Reel extends Component {
  constructor(props) {
    super(props);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      position: 0,
      lastPosition: null
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
    console.log("start"+this.start)

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
  start = this.setStartPosition();
  speed = Reel.iconHeight * this.multiplier;

  // here
  setStartPosition() {
   
    if(this.props.debug && this.props.selectReil){

      console.log("empiezo" +this.start)
      return (this.start * Reel.iconHeight) * -1
      
    }
    return ((Math.floor((Math.random() * 5))) * Reel.iconHeight) * -1;
  }

  moveBackground() {
    // console.log(`Position ${this.state.position }`)
    // console.log(`Speed ${this.speed }`)
    // console.log(`Remaining ${ this.state.timeRemaining }`)
    // console.log(`diFERENCE ${ this.state.position - this.speed }`)
    this.setState({
      position: this.state.position - this.speed,
      timeRemaining: this.state.timeRemaining - 100
    })
    //console.log(`speed ${this.speed}, position ${this.state.position}`)
  }

  getSymbolFromPosition() {
    let { position } = this.state;
    const totalSymbols = 5;
    const maxPosition = (Reel.iconHeight * (totalSymbols - 1) * -1);
    let moved = (this.props.timer / 100) * this.multiplier
    let startPosition = this.start;
    let currentPosition = startPosition;
    console.log(currentPosition)
    for (let i = 0; i < moved; i++) {
      currentPosition -= Reel.iconHeight;

      if (currentPosition < maxPosition) {
        currentPosition = 0;
      }
    }

    this.props.onFinish(currentPosition);
    // console.log(`this is current position ${currentPosition}` )
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
    // console.log(position)

    return (
      <div className="icons"
        style={{ backgroundPosition: '0px ' + position + 'px' }}>
      </div>


    )
  }


}
export default Reel
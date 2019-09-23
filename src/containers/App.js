import React, { Component } from 'react';
import './App.css';
import Reel from './Reel';
import Spinner from '../components/Spinner'
import { symbols, lines , something , sliders} from '../symbols'

// UI - components
import Switches from '../components/Debugger'
import Symbols from '../components/Options'
import DebuggerY from '../components/DebuggerY'

import { marks }  from '../symbols';







class App extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.finishHandler = this.finishHandler.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      winner: null,
      debugMode: true,
      slider1: 1,
      slider2: 1,
      slider3: 1,
      select1: '',
      select2: '',
      select3: '',
      reil1: {
        select: '', 
        slider: 1
      }
    }
    
 
  }  

  handleClick = () => { 
    this.setState({ winner: null });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
    
    if(this.state.debugMode){
      
      if(this.state.select1){
        this._child1.setStartPosition(this.state.select1, this.state.slider1)
      }
      
    }
    console.log(this.state)
  }


  handleChangeSlider = name => (e, value) => {
    this.setState({
      [name]: value
    });

    this.setState({
      debugs : [{
        [name]: value
      }]
    })

    this.setState({ reil1 : {
      slider : value
    }})
    // console.log(this.state)
  };

  
  handleChangeSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ debugs : {
      [event.target.name]: event.target.value

    }})

    this.setState({ reil1 : {
      select : event.target.value
    }})
  }

  

  debugMode = (event) => {
    console.log(event.target.checked)
    if(event.target.checked){
      this.setState( { debugMode : false })
    }else{
      this.setState( { debugMode : true } )
    }
   
  }

  static symbols = {
    bar : 0,
    twoBar : 121,
    threeBar : 242,
    seven : 363,
    cherry : 484
  }
 



  static Lines = { }

  static loser = [
    'Not quite', 
    'Stop gambling', 
    'Hey, you lost!', 
    'Ouch! I felt that',      
    'Don\'t beat yourself up',
    'There goes the college fund',
    'I have a cat. You have a loss',
    'You\'re awesome at losing',
    'Coding is hard',
    'Don\'t hate the coder'
  ];

  static matches = [];
  static topLine = []
  static centerLine = []
  static bottomLine = []

  finishHandler = (value) => {
    
    let topLinePrice = 0;
    let centerLinePrice = 0;
    let bottomLinePrice = 0;
    
    App.matches.push(value);     
    App.topLine.push((value)*-1)
    App.centerLine.push((value)*-1 + 121)
    App.bottomLine.push((value)*-1 + 222)

    if (App.matches.length === 3) {
       
      //let some = Object.assign({}, [App.topLine], [App.centerLine] ,[App.bottomLine]  );
      //console.log(some)
      
      let totalWin = this.getPrices()
      let totalWin2 = this.getPrices1()
      // console.log('PRICE TOP ' +totalWin2)


      const { winner } = this.state;
      const first = App.matches[0];
      
      let results = App.matches.every(match => match === first)

      //console.log(` results ${results}, appmatches  ${App.matches}`)
      this.setState({ winner: results });
    }
  }




      /**
     * 
     *  3 CHERRY symbols on top line 2000
     *  3 CHERRY symbols on center line 1000
     *  3 CHERRY symbols on bottom line 4000
     *  3 7 symbols on any line 150
     *  3 3xBAR symbols on any line 50
     *  3 2xBAR symbols on any line 20
     *  3 BAR symbols on any line 10
     *  Combination of any BAR symbols on any line 5
     *  Any combination of CHERRY and 7 on any line 75 
     * 
     */


  getPrices = () =>  {

    
    let topLineWin = 0;
    let sumTop = App.topLine.reduce((sum, x) => sum + x); // total sum
    let barConcurrency  = App.topLine.filter(num => num === App.symbols.bar);


    if(barConcurrency.length ===1){
      topLineWin = 0;

    }else if(barConcurrency.length === 2){
      topLineWin = 5;

    }else if(App.topLine.every(match => match === App.topLine[0])){
      
      topLineWin = symbols.map(element => {

        // console.log("primera " +((element.position * 3) === sumTop))
        // console.log("segundat " + App.topLine.every(match => match === element.position))

        // Sum is equal to three element on top for each symbol.
        if(((element.position * 3) === sumTop)  &&  App.topLine.every(match => match === element.position)){
          return element.maxPrice
        
        }
        return 0;    
         
      })

    
    }
    //console.log('finalr '+ topLineWin)




     

   

  }
  getPrices1 = () => {
    let topLineWin = 0;
    let sumTop = App.topLine.reduce((sum, x) => sum + x);       // total sum values TOP
    let sumCenter = App.centerLine.reduce((sum, x) => sum + x); // total sum values CENTER
    let sumBottom = App.bottomLine.reduce((sum, x) => sum + x); // total sum valuer BOTTOM
    let barConcurrency  = App.topLine.filter(num => num === App.symbols.bar);
   

 //let lookUp = something['oneBar'].position *3;
 //let lookUp  =  Object.keys(something)
 //let lookUp  =  Object.values(something)
 let lookUp  =  Object.entries(something)//  
 lookUp.forEach(element => {

   if(((element[1].position * 3) === sumTop)  && App.topLine.every(match => match === element[1].position)){

    if(element[1].tripletLineWin){
      console.log(element[1].tripletLineWin)
    }else{
      console.log(element[1].topLineWin)
    }
     
   }
 
  });
 
 
  //console.log(lookUp)
 return lookUp


  }

  emptyArray = () =>{
    App.matches = [];
    App.topLine = [];
    App.centerLine = [];
    App.bottomLine = [];

  }
  
  componentDidMount(){
  console.log(this.state)

  }
  
  render (){

    const { winner } = this.state
    const { debugMode } =  this.state
    const { slider1, slider2, slider3 } = this.state;
    const { select1, select2, select3 } = this.state;
    const { reil1 } = this.state;
    let selectsList = [ select1, select2, select3 ]
    let slidersList = [ slider1, slider2, slider3 ]

   
    // const {debugs } = this.state;
    // console.log(debugs)

    const getLoser = () => {       
      return App.loser[Math.floor(Math.random()*App.loser.length)]
    }
    let repeatButton = null;
    let winningSound = null;

    if (winner !== null) {
      repeatButton = <Spinner onClick={this.handleClick} />
    }

    let debugMenu = lines.map((line, index) => {
      return (
        <div className="dtc">
          <DebuggerY
            onChange={this.handleChangeSelect}
            disabled={this.state.debugMode}
            value={selectsList[index]}
            name={line.state}
            position={line.position}
          >
          </DebuggerY>
          <Symbols
            onChange={this.handleChangeSlider(sliders[index].name)}
            value={slidersList[index + 1]}
            disabled={this.state.debugMode}
          >
          </Symbols>
        </div>
      )
    })


    // if (winner) {
    //   winningSound = <WinningSound />
    // }
    
    // let positioningLook = Object.entries(positioning)
    // let options =positioningLook.map((line, x )=> {

    //   return line[1].positioning.map((name, y) => {
        
    //       return(
    //       <div className="dt">
    //       <Options key={x + y} disabled={this.state.debugMode} name={line.name} ></Options>
    //       </div>
    //       )
               
    //         })
    // })

 
    
   

    return (
      <div>
        <div className="spinner-container">
          <Reel key="Reel1"
            onFinish={this.finishHandler}
            ref={(child) => { this._child1 = child; }}
            timer="1000"
            debug={!debugMode}
            selectReil={reil1.select}
            sliderReil={reil1.slider}
          />
          <Reel key="Reel2"
            onFinish={this.finishHandler}
            ref={(child) => { this._child2 = child; }}
            timer="1400"
            debug={!debugMode} />
          <Reel key="Reel3" onFinish={this.finishHandler}
            ref={(child) => { this._child3 = child; }}
            timer="2200"
            debug={!debugMode} />
          <div className="gradient-fade"></div>
        </div>
        <div className="dt-row pa3 shadow-5 bg-dark-gray">
          <div className="dt dt w-200">
            {repeatButton}
          </div>
          <div className="dt dt w-200">
            <div className="dtc v-mid pa3">
              <Switches debug={this.debugMode} />
            </div>
            <div id="debugger" className="dtc v-mid pa3">
              {debugMenu}
            </div>
          </div>
        </div>
      </div>

     
    )


  }


    

}

export default App;

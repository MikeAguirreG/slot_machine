import React, { Component } from 'react';
import './App.css';
import Reel from './Reel';
import Spinner from '../components/Spinner';
import { symbols, lines , prizes , sliders} from '../symbols';

// UI - components
import SwitchDebugger from '../components/Debugger';
import Symbols from '../components/Options';
import DebuggerY from '../components/DebuggerY';
import BalanceArea from '../components/BalanceArea';
import WinningLines from '../components/WinningLines';
import PayTable from '../components/PayTable';





class App extends Component {
  constructor(props) {

    super(props);

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.finishHandler = this.finishHandler.bind(this)
    this.handleClick = this.handleClick.bind(this);
    this.updateWinner = this.updateWinner.bind(this);

    this.state = {
      winner: null,
      debugMode: true,
      slider1: 1,
      slider2: 1,
      slider3: 1,
      select1: '',
      select2: '',
      select3: '',
      balance: 5000,
      winnerLine: [],
      vibrate : false
    }
    
  }  

  handleClick = () => { 
    this.setState({ winner: null });
    this.setState({ balance : this.state.balance -1})
    this.setState({ winnerLine : []})
    this.setState({ vibrate : true })
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
    
  }


  handleChangeSlider = name => (e, value) => {
    this.setState({ [name]: value });
  };
  
  handleChangeSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeBalance = (event) => {
    this.setState({ balance : event.target.value})
  }

  updateWinner = (line) => {
    var winnerLine = this.state.winnerLine;
    winnerLine = winnerLine.concat(line);
    this.setState({ winnerLine});
  }
  
  
  

  debugMode = (event) => {
    console.log(event.target.checked)
    if(event.target.checked){
      this.setState( { debugMode : false })
    }else{
      this.setState( { debugMode : true } )
    }
    //this.setState({ debugMenu : event.target.checked })
   
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
    
    App.matches.push(value);
    let imagePosition = (value)*-1;
    
    let sumCenterArray;
    let sumBottomArray;
    if(imagePosition < App.symbols.seven ){
      sumCenterArray = 121;
      sumBottomArray = 242;
    }else if(imagePosition === 363){
      sumCenterArray = 121;
      sumBottomArray = -imagePosition;
    }else{
      sumCenterArray = -imagePosition;
      sumBottomArray = -(imagePosition -121);
      
    }

  
    App.topLine.push((imagePosition));
    App.centerLine.push(((imagePosition) + sumCenterArray));
    App.bottomLine.push(((imagePosition) + sumBottomArray));

    if (App.topLine.length === 3) {
       
      let totalWin = this.getPrices()
      if(totalWin>0){
        let { balance } = this.state
        this.setState({ balance : (parseInt(balance) + totalWin)});

        //setTimeout(this.setState({ winnerLine : []}),1500)
        
      }

      console.log('getPrizes1 ' +totalWin)
      console.log(this.state.winnerLine)
      console.log(this.state.winner)


      const { winner } = this.state;
      const first = App.matches[0];
      
      let results = App.matches.every(match => match === first)
      this.setState({ winner: results });
      this.setState({ vibrate : false });
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

  getPrices = () => {
    let sumatories = [ App.topLine ,App.centerLine, App.bottomLine ]
    let lookUp  =  Object.entries(prizes)
    let totalPrize = 0;
    
   for(const [index, suma]  of sumatories.entries()){
    let sumatorie =suma.reduce((sum, x) => sum + x)       // Sumatory Row
    let triplet = suma.every(match => match === suma[0])  // Triplet Row
    let barPair = suma.filter(num => num === App.symbols.bar); // BAR Pair
    let cherry = suma.includes(App.symbols.cherry);
    let seven = suma.includes(App.symbols.seven);
    let prize = 0;
   
    for (const key of lookUp) {

      //Check any triplets

      if(((key[1].position * 3) === sumatorie)  && triplet){
      
        if(key[1].tripletLineWin){
          prize= key[1].tripletLineWin;
          this.updateWinner(index)
          console.log(`${key[1]} prize ${key[1].tripletLineWin}`)
        }else if(key[1].topLineWin && index === 0){
          prize=key[1].topLineWin;
          this.updateWinner(index)
          console.log(`${key[1]} prize ${key[1].topLineWin}`)
        } else if(key[1].centerLineWin && index === 1){
          prize= key[1].centerLineWin;
          this.updateWinner(index)
          console.log(`${key[1]} prize ${key[1].centerLineWin}`)
        } else if(key[1].bottomLineWin && index === 2){
          prize=key[1].bottomLineWin;
          console.log(`${key[1]} prize ${key[1].bottomLineWin}`)
          this.updateWinner(index)
        }
      }
      // Check BAR pair
      if(key[1].pairAnyLine && barPair.length === 2){
        prize=key[1].pairAnyLine;
        this.updateWinner(index)
        console.log(`${key[1]} prize ${key[1].pairAnyLine}`)
      }
      // Check Cherry/Seven combination
      if(key[1].combinedSeven && cherry && seven){
        prize = key[1].combinedSeven;
        this.updateWinner(index)
        console.log(`${key[1]} prize ${key[1].combinedSeven}`)
      }
    }
    totalPrize += prize;
     
   }
  console.log("Total " +totalPrize)
  return totalPrize;

  }

  emptyArray = () =>{
    App.matches = [];
    App.topLine = [];
    App.centerLine = [];
    App.bottomLine = [];

  }

  // componentWillUpdate() {
  //   this.setState({ winnerLine : []})
  // }
 
  render (){

    const { winner , debugMode, balance , winnerLine , vibrate} = this.state
    const { slider1, slider2, slider3 } = this.state;
    const { select1, select2, select3 } = this.state;
    let selectsList = [ select1, select2, select3 ]
    let slidersList = [ slider1, slider2, slider3 ]

    // Disable
    let disabled =  winner !== null ? false : true;
    let vibration =  vibrate !== false ? 'vibrate-' : '';

    let winningSound = null;
    const getLoser = () => {       
      return App.loser[Math.floor(Math.random()*App.loser.length)]
    }
    let repeatButton = <Spinner onClick={this.handleClick} disabled={disabled} />
    let debugSwitch =  <SwitchDebugger debug={this.debugMode} />

    let debugMenu = lines.map((line, index) => {
      return (
        <div key={index} className="dtc">
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

    let balanceArea = <div  className="dtc">
                         <BalanceArea 
                            balance={this.handleChangeBalance} 
                            value={balance} 
                            disabled={disabled} 

                          />
                      </div>

    let lineSections = <WinningLines winnerLine={winnerLine} />

    let payTable = <PayTable />

    // if (winner) {
    //   winningSound = <WinningSound />
    // }
  

 
    
   

    return (
      <div>
        <div className="spinner-container">
          <Reel key="Reel1"
            onFinish={this.finishHandler}
            ref={(child) => { this._child1 = child; }}
            timer="1000"
            debug={!debugMode}
            selectReil={select1}
            sliderReil={slider1}
            vibrate={vibration+ "1"}
       
          />
          <Reel key="Reel2"
            onFinish={this.finishHandler}
            ref={(child) => { this._child2 = child; }}
            timer="1500"
            debug={!debugMode} 
            selectReil={select2}
            sliderReil={slider2}
            vibrate={vibration+ "2"}       
            />
          <Reel key="Reel3" onFinish={this.finishHandler}
            ref={(child) => { this._child3 = child; }}
            timer="2000"
            debug={!debugMode}
            selectReil={select3}
            sliderReil={slider3}
            vibrate={vibration+ "3"} 
            />
          <div className="gradient-fade"></div>
          {lineSections}
         
        </div>
        <div className="pay-table">{payTable}</div>
        <div className="debugger dt-row pa3 shadow-5 bg-dark-gray">
          <div className="dt dt center w-200">
            <div className="dtc v-mid pr2">{repeatButton}</div>
            <div className="dtc v-mid">{balanceArea}</div> 
          </div>
          <div className="dt dt center w-200">
            <div className="dtc v-mid ">{debugSwitch}</div>
            <div id="debugger" className="dtc v-mid">{debugMenu}</div>
          </div>
        </div>
      </div>

     
    )


  }


    

}

export default App;

export let symbols = [
  
    {
      name : "bar",
      position :0,
      maxPrice : 10
    },
    {
      name : "twoBar",
      position :121,
      maxPrice : 20
    },
    {
      name : "threeBar",
      position :242,
      maxPrice : 30
    },
    {
      name : "seven",
      position :363,
      maxPrice : 150
    },
    {
      name : "cherry",
      position :484,
      maxPrice : 200
    }

]

  /**
     * 
     *  3 BAR symbols on any line 10
     *  Combination of any BAR symbols on any line 5
     *  3 2xBAR symbols on any line 20
     *  3 3xBAR symbols on any line 50
     *  3 7 symbols on any line 150
     *  3 CHERRY symbols on top line 2000
     *  3 CHERRY symbols on center line 1000
     *  3 CHERRY symbols on bottom line 4000
     *  Any combination of CHERRY and 7 on any line 75 
     * 
     */


export let something = {
  oneBar : {
    position :0,
    tripletLineWin : 10,
    pairAnyLine : 5
  },
  twoBar : {
    position :121,
    tripletLineWin : 20
    
  },
  threeBar : {
    position :242,
    tripletLineWin : 50
    
  },
  seven : {
    position :363,
    tripletLineWin : 150
    
  },
  cherry : {
    position :484,
    topLinePrize : 10,
    centerLinePrize : 10,
    bottomLinePrize : 10,
    pairAnyLine : 5
    
  }

}

export let lines = [ 
  {name: "Top Line",
   state : "select1",
   position: "Left"},
  {name: "Center Line",
  state : "select2",
  position: "Center"},
  {name: "Bottom Line",
  state : "select3",
  position: "Right"},
]

export let sliders = [ 
  {name: "slider1"},
  {name: "slider2"},
  {name: "slider3"},
]

export let positioning = 
  {
    topLine : {
      name : "Top Line",
      positioning: ["left", "right", "side"]
    },
    centerLine : {
      name : "Center Line",
      row : "dtc",
      positioning: ["left", "right", "side"]
    },
    bottomLine : {
      name : "Bottom Line",
      positioning: ["left", "right", "side"]
    }
    
  }




  export let marks = [
    {
      value: 1,
      label: 'BAR',
    },
    {
      value: 2,
      label: '2BAR',
    },
    {
      value: 3,
      label: '3BAR',
    },
    {
      value: 4,
      label: '7',
    },
    {
        value: 5,
        label: 'CHERRY',
    }
  ];


  

  
  
  






  // getPrices = () => {
  //     // Combinations on top line
  //     //var sum = App.matches.every(match => match === App.symbols.bar)
  //     let sumCombination  =  [];
  //     sumCombination.push.apply(sumCombination, [ App.topLine.reduce((sum, x) => sum + x), App.topLine.every(match => match === App.symbols.bar)])

  //     //var bar = numbers.filter(item => item  == 0);
  //     console.log( `Sum combinations ${sumCombination}`)
  //     switch (sumCombination){
  //       case [(App.symbols.bar * 3), true]:
  //         console.log(` combinacion sum ${App.symbols.bar * 3}`)
  //         return 10;
  //       case (App.symbols.twoBar * 3):
  //           console.log(` combinacion sum ${App.symbols.twoBar * 3}`)
  //         return 20;
  //       case (App.symbols.threeBar * 3):
  //           console.log(` combinacion sum ${App.symbols.threeBar * 3}`)
  //         return 50;
  //       case (App.symbols.seven * 3):
  //           console.log(` combinacion sum ${App.symbols.seven * 3}`)
  //         return 150;
  //       case (App.symbols.cherry * 3):
  //           console.log(` combinacion sum ${App.symbols.cherry * 3}`)
  //         return 2000;
  //       case App.symbols.twoBar:
  //       case App.symbols.threeBar:
  //       case App.symbols.seven: 
  //       case App.symbols.cherry:
  //           if((App.topLine.filter(item => item).length() === 2)){
  //             return 5;
  //           }
  //         return 5;

  //       default : return 0;
      
  
  //     }


  // }




/** Debugger Code */

 {/* <DebuggerY  onChange={this.handleChangeSelect} disabled={this.state.debugMode} value ={select1} name={"select1"}></DebuggerY>
          <Options  onChange={this.handleChangeSlider(sliders[0].name)} value={slider1} disabled={this.state.debugMode}></Options>
          <DebuggerY onChange={this.handleChangeSelect} disabled={this.state.debugMode} value ={select2} name={"select2"}></DebuggerY>
          <Options  onChange={this.handleChangeSlider(sliders[1].name)} value={slider2} disabled={this.state.debugMode}></Options>
          <DebuggerY onChange={this.handleChangeSelect} disabled={this.state.debugMode} value ={select3} name={"select3"}></DebuggerY>
          <Options  onChange={this.handleChangeSlider(sliders[2].name)} value={slider3} disabled={this.state.debugMode}></Options> */}
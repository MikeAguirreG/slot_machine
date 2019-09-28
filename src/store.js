
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


export let prizes = {
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
    topLineWin : 2000,
    centerLineWin : 1000,
    bottomLineWin : 4000,
    combinedSeven : 75
    
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




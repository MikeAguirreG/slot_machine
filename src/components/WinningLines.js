import React from 'react';

const WinningLines = (props) => {
  
    return(
    <div>
     <div className={`line3 ${props.winnerLine.includes(0) ? 'line-winner scale-up-center' : 'line '}`}/>
     <div className={`line2 ${props.winnerLine.includes(1) ? 'line-winner scale-up-center' : 'line'}`}/>
     <div className={`line1 ${props.winnerLine.includes(2) ? 'line-winner scale-up-center' : 'line'}`}/>
   </div>
          
    )
     

}
export default WinningLines;

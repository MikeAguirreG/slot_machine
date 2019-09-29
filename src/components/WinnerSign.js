import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';

let WinnerSign = ({total, winnerLine}) => {
  let sign= ''
  if(total){
    sign = <h2>Winner: {total} coins!</h2>
  }

    return(
        <Transition
            native
            items={winnerLine}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
        >
            {show =>
              show &&
              (props => (
                <animated.div style={props} className=" tc">
                  <div className="winner-sign">
                    {sign}
                  </div>
                </animated.div>
              ))
            }
        </Transition>

    )

}
export default WinnerSign;
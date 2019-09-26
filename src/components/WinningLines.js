import React ,{ useState } from 'react';
import {Spring, Transition, animated } from 'react-spring/renderprops';
import { useSpring} from 'react-spring'
import posed from 'react-pose';

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





/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/

// function Demo() {
//   const [state, toggle] = useState(true)
//   const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
//   return (
//     <div onClick={() => toggle(!state)}>
//       <animated.div
//         style={{
//           opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//           transform: x
//             .interpolate({
//               range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//               output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//             })
//             .interpolate(x => `scale(${x})`)
//         }}>
//         click
//       </animated.div>
//     </div>
//   )
// }



{/* <Spring
from={{ opacity: 0, marginTop: -500 }}
to={{ opacity: 1, marginTop: 0 }}
>
{props => (
  <div style={props}>
    <div style={c1Style}>
      <h1>Component 1</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
        nobis adipisci eum minima deserunt at porro, veritatis officia
        commodi itaque voluptates vel suscipit assumenda soluta ipsa
        voluptatibus laudantium labore harum?
      </p>
    </div>
  </div>
)}
</Spring> */}

import React from 'react';
import { Spring } from 'react-spring/renderprops'
//images
import bar_img from '../images/BAR.png'
import twobar_img from '../images/2xBAR.png'
import threebar_img from '../images/3xBAR.png'
import seven_img from '../images/7.png'
import cherry_img from '../images/Cherry.png'


function createData(name, prize, image) {
    return { name, prize, image };
}

const rows = [
    createData('Combination Any Line', 5, [bar_img, bar_img, '']),
    createData('Any Line', 10, [bar_img, bar_img, bar_img]),
    createData('Any Line', 20, [twobar_img, twobar_img, twobar_img]),
    createData('Any Line', 50, [threebar_img, threebar_img, threebar_img]),
    createData('Any Line', 150, [seven_img, seven_img, seven_img]),
    createData('Combination Any Line', 75, [seven_img, cherry_img, '']),
    createData('Top Line', 2000, [cherry_img, cherry_img, cherry_img]),
    createData('Center Line', 1000, [cherry_img, cherry_img, cherry_img]),
    createData('Bottom Line', 4000, [cherry_img, cherry_img, cherry_img]),
];

const PayTable = ({vibrate}) => {

    return (
        <Spring
          from={{ opacity: 0, marginTop: 500 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ duration: 500 }}
        >
          {props => (
            <div style={props} className="bg-white dib br3  grow bw2 shadow-5" >
                <div className="tc" > <h2> Pay Table </h2></div> {
                    rows.map((row, i)=> (

                        <div key={i} className={`flex ${vibrate.includes(row.prize) ? 'shake-horizontal line bg-light-gray' : ' '}`} >
                            <div className="w-55 pa1 mr1 al" >
                                <div className="h2" > <img src={row.image[2]} alt="" className="img-icon" /> </div> </div>
                            <div className="w-55 pa1 mr1 al" >
                                <div className="h2"> <img src={row.image[1]} alt="" className="img-icon" /> </div> </div>
                            <div className="w-55 pa1 mr1 al" >
                                <div className="h2" > <img src={row.image[0]} alt="" className="img-icon" /> </div> </div>
                            <div className="w-75 pa1 mr1 ar" >
                                <div className="pay-table-text tl " > {row.name} <b> {row.prize} </b></div>
                            </div>
                        </div>

                    ))
                } 
            </div>
          )}
        </Spring>

    );
}

export default PayTable;
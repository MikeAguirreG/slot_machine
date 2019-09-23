import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { marks } from '../symbols'


const useStyles = makeStyles(theme => ({
    root: {
      width: 150,
      fontSize: '0.5rem',
    },
    margin: {
      height: theme.spacing(0.5),
    },
    thumb: {
        boxShadow: '#ebebeb 0px 2px 2px',
        '&:focus,&:hover,&$active': {
          boxShadow: '#ccc 0px 2px 3px 1px'}}}));
  

let Symbols = (props) => {

    const classes = useStyles();

        return(
            <div className={'dtc pa2 '+ classes.root } >
                <Typography id="discrete-slider" gutterBottom>
                    {/* {props.name} */}
                </Typography>
                <Slider
                    onChange = {props.onChange}
                    // value = {props.value}
                    disabled = {props.disabled}
                    defaultValue={1}
                    aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="on"
                    step={1}
                    marks={marks}
                    min={1}
                    max={5}
                />
                
            </div>
        )
   

    

}
export default  Symbols;










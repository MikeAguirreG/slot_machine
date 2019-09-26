import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
// import PropTypes from 'prop-types';




const BalanceArea = (props) => {


      const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        margin: {
          margin: theme.spacing(1),
        },
        textField: {
          flexBasis: 200,
        },
      }));

    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: ''
    });
  
    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value });
    };


  
    return (
        <TextField
            className={clsx(classes.margin, classes.textField)}
            label="Coins"
            variant="outlined"
            value={values.numberformat}
            onChange={props.balance}
            disabled= {props.disabled}
            value= {props.value}
            id="outlined-adornment-amount"
            InputProps={{inputComponent: NumberFormatCustom,
                        startAdornment: <InputAdornment position="start">$</InputAdornment>}}
            
          
         
        />
    )
    

}
export default BalanceArea;



function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        defaultValue ={5000}
        allowNegative={false}
        decimalSeparator = {false}
        prefix=""
        isAllowed={(values) => {
        const {floatValue} = values;
        return floatValue >= 0 &&  floatValue <= 5000;}}
      />
    );
  }
  
//   NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };
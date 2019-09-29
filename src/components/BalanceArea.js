import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';



const BalanceArea = (props) => {


  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      flexBasis: 200,
    },
    input: {
      color: "white"
    }
  }));

  const classes = useStyles();
  const [values] = React.useState({
    amount: ''
  });

  return (
    <td>
      <TextField
        style={{ width: 110 }}
        className={clsx(classes.margin, classes.textField)}
        label="Coins"
        variant="outlined"
        value={values.numberformat}
        onChange={props.balance}
        disabled={props.disabled}
        value={props.value}
        id="outlined-adornment-amount"
        InputProps={{
          inputComponent: NumberFormatCustom, className: classes.input,
          startAdornment: <InputAdornment position="start">$</InputAdornment>
        }}
      />
    </td>
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
      defaultValue={5000}
      allowNegative={false}
      decimalSeparator={false}
      prefix=""
      isAllowed={(values) => {
        const { floatValue } = values;
        return floatValue >= 0 && floatValue <= 5000;
      }}
    />
  );
}

//   NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };
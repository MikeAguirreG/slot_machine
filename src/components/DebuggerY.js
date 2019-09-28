import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { lines } from '../store';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}));


const DebuggerY = (props) => {



  const classes = useStyles();
  return (

    <form className="tc" >
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">{props.position}</InputLabel>
        <Select
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          inputProps={{
            name: props.name,
            id: 'demo-controlled-open-select'
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            lines.map((line, index) => {
              return <MenuItem key={index} value={index + 1}>{line.name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </form>

  )
}
export default DebuggerY;



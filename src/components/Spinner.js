import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Spinner = (props) => {
  const classes = useStyles();
  return (
    <td>
      <div>
        <Fab id='repeatButton' disabled={props.disabled} onClick={props.onClick} variant="extended" aria-label="delete" className={classes.fab}>
          <NavigationIcon className={classes.extendedIcon} />
          Spin
        </Fab>
      </div>
    </td>

  )
}

export default Spinner;
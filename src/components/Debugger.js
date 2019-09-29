import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Debugger = (props) => {
    return( 
        <td>
          <FormControlLabel
          value="bottom"
          className="pa2 ma0 f6"
          control={<Switch color="primary" />}
          label="Debug Mode"
          onChange={props.debug}
          labelPlacement="bottom"
        />
      </td>
    );
} 
export default Debugger;
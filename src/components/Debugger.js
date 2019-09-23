import React from 'react';

let Debugger = (props) => {
    return( 
        <div className="dt">
        <label className="pa1 ma0 lh-copy f6 pointer">
            <input type="checkbox" onChange={props.debug}/>
            Debug Mode
        </label>
        </div>
    );
} 
export default Debugger;
import React from 'react';
import {formProps} from '../form.type'

function JustMessage({showPopUp=true,setShowPopUp}:formProps) {
    return (
        <div>
            <h1>Very simple Content</h1>
            <button onClick={()=>setShowPopUp(showPopUp)}>CLOSE POPUP</button>
        </div>
    );
}

export default JustMessage; 
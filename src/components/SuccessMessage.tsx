import React from 'react';
import {formProps} from '../form.type'


function SuccessMessage({setShowPopUp}:formProps) {
    return (
        <div>
           <h1>Congrats!!!, you submitted form successfully</h1> 
           <button onClick={()=>setShowPopUp(false)}>close pop up</button>
        </div>
    );
}

export default SuccessMessage;
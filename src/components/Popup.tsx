import React from 'react';
import {popUpProps} from '../form.type'

function Popup({show,component}:popUpProps) {
    return show? <div className="popup">
            {/* <h1>This is a empty popup</h1> */}
            {component}
            
        </div> : null
}
export default Popup;
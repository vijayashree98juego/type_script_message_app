import React from 'react';

function Popup(props) {
    return props.show? <div className="popup">
            {/* <h1>This is a empty popup</h1> */}
            {props.component}
            
        </div> : null
}
export default Popup;
import React from 'react';

function SuccessMessage(props) {
    return (
        <div>
           <span>Congrats!!!, you submitted form successfully</span> 
           <button onClick={()=>props.setDisplay(false)}>close pop up</button>
        </div>
    );
}

export default SuccessMessage;
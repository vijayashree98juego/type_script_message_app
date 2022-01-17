import React from 'react';

function JustMessage(props) {
    let {display,setDisplay}= props;
    return (
        <div>
            <h1>Very simple Content</h1>
            <button onClick={()=>setDisplay(display)}>CLOSE POPUP</button>
        </div>
    );
}

export default JustMessage; 
import React from 'react';
import useInputHooks from '../hooks/useToggleHooks'

function HookLearningState() {
    let [toggle,bind]= useInputHooks(false)

    return (
        <div>
            <span >Did you not like hooks? <input type="checkbox" {...bind}/>:  {toggle?"Not like":"Like"}</span>
        </div>
    );
}

export default HookLearningState;
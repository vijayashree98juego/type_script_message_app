import React from 'react';
import useInputHooks from '../hooks/useInputHooks'

function HookLearningState(props) {
    let [toggle,bind]= useInputHooks(false)

    return (
        <div>
            <span >Did you not like hooks? <input type="checkbox" {...bind}/>{toggle?"Not like":"Like"}</span>
        </div>
    );
}

export default HookLearningState;
import React from 'react';
import useInputHooks from '../hooks/useToggleHooks'

function UserState() {
    let [toggle,bind]= useInputHooks(true)

    return (
        <div>
            <span>Are you Happy?<input type="checkbox" {...bind}/>:  {toggle?"Happy":"Not Happy"} </span>
        </div>
    );
}

export default UserState;
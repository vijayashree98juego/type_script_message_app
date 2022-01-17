import React from 'react';
import useInputHooks from '../hooks/useInputHooks'

function UserState(props) {
    let [toggle,bind]= useInputHooks(true)

    return (
        <div>
            <span>Are you Happy?<input type="checkbox" {...bind}/>{toggle?"Happy":"Not Happy"} </span>
        </div>
    );
}

export default UserState;
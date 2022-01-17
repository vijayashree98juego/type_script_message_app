import React,{useState} from 'react';

function useToggleHooks(toggleStatus) {
    let [toggle,setToggle] = useState(toggleStatus);
    let onClick=()=>setToggle(!toggle);
    let bind={
        onClick
    }
    return [toggle,bind];
}

export default useToggleHooks;
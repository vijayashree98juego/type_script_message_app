import React from 'react';

function MyForm(props) {
    let {display,setDisplay} = props;
    return <form onSubmit={(e)=>{e.preventDefault();setDisplay(display);}}>
        <label htmlFor="name">Enter your Name</label>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Send"/>
    </form>
}

export default MyForm;
import React from 'react';
import {formProps} from '../form.type'

function MyForm({showPopUp=true,setShowPopUp} :formProps) {
    return <form onSubmit={(e)=>{e.preventDefault();setShowPopUp(showPopUp);}}>
        <label htmlFor="name">Enter your Name</label>
        <input type="text" name="name" id="name" />
        <input type="submit" value="Send"/>
    </form>
}

export default MyForm;
import React  from 'react';
import SuccessMessage from './components/SuccessMessage'

function FeedbackForm(props) {

    function onChangeHandler(){

        props.setDisplay(true);
        props.setComponent(SuccessMessage({setDisplay:props.setDisplay}))
    }

    return (
        <div>
            
            <label>email</label><input type="text" />
            <label>user name</label><input type="text"/>
            <label>password</label><input type="password"/>
            <input type="submit" onClick={onChangeHandler}/>
        </div>
    );
}

export default FeedbackForm;
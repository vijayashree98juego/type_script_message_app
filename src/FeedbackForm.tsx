import React  from 'react';
import SuccessMessage from './components/SuccessMessage'
import {formProps} from './form.type'


function FeedbackForm({setShowPopUp,setComponent=function(){}}:formProps) {
    function onSubmitHandler(e:React.FormEvent<HTMLElement>){
        e.preventDefault();
        setShowPopUp(true)
        setComponent(SuccessMessage({setShowPopUp}))
    }

    return (
        <div>
        <form onSubmit={(e)=>{onSubmitHandler(e);}}>
            <label>email</label><input type="email" name="email" id="email"/>
            <label>user name</label><input type="text" name="user_name" id="user_name"/>
            <label>password</label><input type="password" name="password" id="password"/>
            <input type="submit" name ="submit" />     
            </form>
            </div>
    );
}

export default FeedbackForm;
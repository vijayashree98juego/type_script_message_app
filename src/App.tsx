import './App.css';
import * as React from 'react';
import useToggleHooks from './hooks/useToggleHooks'
import Popup from './components/Popup';
import JustMessage from './components/JustMessage'
import MyForm from './components/MyForm'
import FeedbackForm from './FeedbackForm'
export {}

function App() {
  let [toggle,bind1]= useToggleHooks(false)
  let [toggl2,bind2]= useToggleHooks(true);
  let [component,setComponent] =React.useState<JSX.Element>(<></>);
  let [showPopUp,setShowPopUp]= React.useState<boolean>(false);

  const onClickHandler =(data:any)=>{
    setShowPopUp(true);
    setComponent(data({showPopUp,setShowPopUp}));   
  }

  return (
    <div className="App">
    <div>
        <span>Are you Happy?<input type="checkbox"  {...bind1}/>:  {toggle?"Happy":"Not Happy"} </span>
        </div>
        <div>
        <span >Did you not like hooks? <input type="checkbox" {...bind2}/> :{!toggl2?"Not like":"Like"}</span>
        </div>
        <button onClick={()=>onClickHandler(JustMessage)}>click to view message</button>
        <button onClick={()=> onClickHandler(MyForm)}>click to view form</button>
        <Popup show={showPopUp} component={component}/>
        <FeedbackForm setShowPopUp={setShowPopUp} setComponent={setComponent}/>
    </div>
  );
}

export default App;

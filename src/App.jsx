import './App.css';
import react ,{useState,useReducer,useEffect} from 'react';
import useToggleHooks from './hooks/useToggleHooks'
import Popup from './components/Popup';
import JustMessage from './components/JustMessage'
import MyForm from './components/MyForm'
import FeedbackForm from './FeedbackForm.tsx'

function App() {
  let [toggle,bind]= useToggleHooks(false)
  let [toggl2,bind2]= useToggleHooks(true);
  let [component,setComponent] =useState();
  let [display,setDisplay]=useState(false);

  const onClickHandler =(data)=>{
    setDisplay(true);
    setComponent(data({display,setDisplay}));   
  }

  return (
 
    <div className="App">
    <div>
        <span>Are you Happy?<input type="checkbox"  {...bind}/> {toggle?"Happy":"Not Happy"} </span>
        </div>
        <div>
        <span >Did you not like hooks? <input type="checkbox" {...bind2}/> {toggl2?"Not like":"Like"}</span>
        </div>
          <button onClick={()=>onClickHandler(JustMessage)}>click to view message</button>
        <button onClick={()=> onClickHandler(MyForm)}>click to view form</button>
        <Popup show={display} component={component}  />
        <FeedbackForm setDisplay={setDisplay} setComponent={setComponent} />
    </div>
  );
}

export default App;

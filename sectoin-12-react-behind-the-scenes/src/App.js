import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showPara, setShowPara] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)

  // runs on every buttnon click, bacuse the state in app changes and is re-evaluated
  console.log("App.js running")

  const showParaHandler = useCallback(() => {
    // useCallback stores an unmutable version of allowToggle on its first execution of showPAra,
    if(allowToggle){
      // switch state to whatever it isnt
      setShowPara((prevShowState) => !prevShowState);
    }
  }, [allowToggle]);
// Whenever the allowToogle dependency changes React will override useCallback  and recreate the function with an updated value. In this app it wont change after the first clickt to allowToggleHandler

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }


 

  return (
    <div className="app">
      <h1>Hi there!</h1>

      {/* its state never changes, so React.memo will only rerender it on props changes.
      It children will also not rerender
       */}
      {/* <DemoOutput show={false}></DemoOutput> */}

      <DemoOutput show={showPara}></DemoOutput>
      {/* Enable toggle on showParaBtn */}
      <button onClick={allowToggleHandler}>Allow Toggle</button>
      <Button onClick={showParaHandler}>Bring it to life</Button>
    </div>
  );
}

export default App;


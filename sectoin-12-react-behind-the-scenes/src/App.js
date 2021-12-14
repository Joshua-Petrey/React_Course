import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showPara, setShowPara] = useState(false)

  // runs on every buttnon click, bacuse the state in app changes and is re-evaluated
  console.log("App.js running")

  const showParaHandler = useCallback(() => {
    // switch state to whatever it isnt
    setShowPara((prevShowState) => !prevShowState);
  }, [setShowPara]);

  return (
    <div className="app">
      <h1>Hi there!</h1>

      {/* its state never changes, so React.memo will only rerender it on props changes.
      It children will also not rerender
       */}
      {/* <DemoOutput show={false}></DemoOutput> */}

      <DemoOutput show={showPara}></DemoOutput>
      <Button onClick={showParaHandler}>Bring it to life</Button>
    </div>
  );
}

export default App;

import { useState } from "react"
import Output from "./Output"

const Greeting = () => {
  const [changedText, setChangedText] = useState(false)

  const textChangeHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Text was changed</Output>}
      <button onClick={textChangeHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  const add = (n) => {
    setCount(count+n)
    return
  }
  function handleNumChange(n) {
    setNum(n)
    return
  }
  return (
    <div className="App">
      <h1 className="text">
        {count}
      </h1>
      <input value={num} onChange={(e) =>
        handleNumChange(parseInt(e.target.value))
      }></input>
      <button onClick={() => add(num)}>add</button>
    </div>
  );
}

export default App;

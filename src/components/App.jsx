import React from "https://dev.jspm.io/react";

const App = () => {
  const [count, setCount] = React.useState(0);

  return <main>
    <h1>Apretá el botón!</h1>
    <button onClick={() => setCount(count + 1)}>Apretar :D</button>
    <span>{count}</span>
  </main> 
}

export default App;
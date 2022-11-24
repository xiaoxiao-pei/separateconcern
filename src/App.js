
import './App.css';
import React from 'react';

function App() {
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem("color")) || "blue");
  const [count, setCount] = React.useState(JSON.parse(localStorage.getItem("count")) || 0);

  React.useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
  }, [color, count]);


  return (<div>
    <DisplayMessage color={color} />
    <Clock />
    <CountDisplay count={count} />
    <UserActions setColor={setColor} setCount={setCount} count={count} color={color} />
  </div>
  );

  function DisplayMessage(props) {
    return <h1 style={{ color: props.color }}>Hello React World</h1>;
  }

  function CountDisplay(props){
    return <p>{props.count}</p>
  }

  function UserActions(props) {
    return <button onClick={() => {
      props.setColor(toggle(props.color));
      props.setCount(props.count + 1)
    }}>
      Click me React
    </button>
  }

  function toggle(color) {
    if (color === "blue") {
      return "red";
    } else {
      return "blue";
    }
  }

  function Clock() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    //setInterval(() => setTime(new Date().toLocaleTimeString()), 3000);
    React.useEffect(() => {
      const interval = setInterval(() =>
        setTime(new Date().toLocaleTimeString()), 1000);
      return () => { clearInterval(interval); }
    }, [time]);
    return <p>React Clock: {time} </p>
  }
}

export default App;

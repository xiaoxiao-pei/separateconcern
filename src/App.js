
import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';


function DisplayMessage(props) {
  return <h1 style={{ color: props.color }}>Hello React World</h1>;
}

function Clock(props) {
  return <p> React Clock: {props.time} </p>;
}

function toggle(color) {
  if (color === "blue") {
    return "red";
  } else if (color === "red") {
    return "green";
  } else {
    return "blue";
  }
}

function App() {
  const [color, setColor] = React.useState(JSON.parse(sessionStorage.getItem("color")) || "blue");
  const [count, setCount] = React.useState(JSON.parse(localStorage.getItem("count")) || 0);

  console.log(color);
  console.log(count);

  React.useEffect(() => {
    sessionStorage.setItem('color', JSON.stringify(color));
    localStorage.setItem('count', JSON.stringify(count));
  }, [color, count]);


  return (<div>
    <DisplayMessage color={color} />
    <Clock time={new Date().toLocaleTimeString()} />
    <p>{count}</p>
    <button onClick={() => {
      setColor(toggle(color));
      setCount(count + 1);
    }}>
      Click me React
    </button>
  </div>
  );
}

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
//setInterval(() => root.render(<App />), 1000);


export default App;

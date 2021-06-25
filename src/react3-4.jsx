//useEffect

import React, { useState, useEffect } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;
  //useEffectはレンダーが終わったあとに発火Didmount DidUpdateに似てる
  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate.");
  });
  //Didmount的な使い方をするときは第2引数にからの配列を渡す
  useEffect(() => {
    console.log("This is like componentDidMount");
  },[]);
  //特定の値が変わった時だけ発火
  //第2引数に値を渡す
  useEffect(() => {
    console.log("This callback is for name only.");
  },[name]);

  return (
    <>
      <p>
        現在の{name}は、 {price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};
App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;

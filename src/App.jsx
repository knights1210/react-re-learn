//useState3
//useState2のリファクタリング
//useStateにはオブジェクトを渡せる
//複数の値があるオブジェクトだとsetStateを使うときに
//stateを展開してから、変える値: state.変える値にする？
//state.priceだと長いので分割代入して短くする

import React, { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  //分割代入↓
  const { name, price } = state;
  //nameというオブジェとpriceというオブジェが出来る
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

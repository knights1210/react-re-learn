import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";

const Events = ({ state }) => {
  //createContext()でcomponentを作成し、作成したcomponentで
  //ラップすれば((ex)<AppContext></AppContext>)
  //useContextでAppContextに渡ったvalueを参照出来る
  //((ex)<AppContext.Provider value={'Hello'}></AppContext.Provider>)
  const value = useContext(AppContext)
  return (
    <>
      <div>{value}</div>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;

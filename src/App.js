import React from 'react';
import './App.css';
import Count from "./js/components/Counter";
import { Provider } from "react-redux";
import store from "./js/redux/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Count />
      </Provider>
    </div>
  );
}

export default App;

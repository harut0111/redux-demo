import React from 'react';
import './App.css';
import Count from "./js/components/Counter";
import { Provider } from "react-redux";
import { store } from "./js/redux/store/index";

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

// Աշխատանքի հերթականությունը դիտելու համար console-ը նայել


// getState() method does't couse rerender so it will call only after re/render
// const state = store.getState();

// սթեյթի փոփոխությունից հետ(new state version) այն բոլոր mapStateToProps-ները
// աշխատում են բայց rerender լինեում է միայն այն կոմպոնենտը որ օգտագործում է
// այդ փոփոխված արժեքը, իսկ մյուս կոմպոնենտները rerender չեն լինում։
import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";

import { Table } from "./components/Table/index";
import { Form } from "./components/Form/index";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Form />
        <Table />
      </Provider>
    </div>
  );
}

export default App;

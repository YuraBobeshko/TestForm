import React, { useState } from "react";
import { Provider } from "react-redux";

import { store } from "./store/index";
import Modal from "./components/modal/Modal";
import { Table } from "./components/Table/index";
import { Form } from "./components/Form/index";
import "./App.css";

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  return (
    <div className="">
      <Provider store={store}>
        <Modal
          title={"Registration form"}
          isOpen={isOpenForm}
          onCancel={() => setIsOpenForm(false)}
        >
          <Form />
        </Modal>
        <Table />
      </Provider>
      <button className={"btn btn-dark fixed-bottom p-3 m-5"} onClick={() => setIsOpenForm(true)}>
          Add new user
      </button>
    </div>
  );
}

export default App;

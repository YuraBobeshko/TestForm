import React, { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Modal from "./components/modal/Modal";

import { Table } from "./components/Table/index";
import { Form } from "./components/Form/index";

function App() {
  const [isOpenForm, setIsOpenForm] = useState(false);
  return (
    <div className="">
      <Provider store={store}>
        <button className={"btn btn-dark fixed-bottom"} onClick={() => setIsOpenForm(true)}>
          Show registration form
        </button>
        <Modal
          title={"Registration form"}
          isOpen={isOpenForm}
          onCancel={() => setIsOpenForm(false)}
        >
          <Form />
        </Modal>
        <Table />
      </Provider>
    </div>
  );
}

export default App;

import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

import Input from "../Input/Input";

const Form = ({listUser, addListUser}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState('');
  const [error, setError] = useState([
    { name: "firstName", isError: "first", title: "wrong first name" },
    { name: "lastName", isError: "first", title: "wrong last name" },
    { name: "number", isError: "first", title: "wrong number" },
    { name: "age", isError: "first", title: "wrong age" },
  ]);
  
  const memoizedError = useMemo(
    () =>
      error.every(item =>
        item.name === "gender" ? item.isError !== "first" : !item.isError
      ),
    [error]
  );

  const createUser = (firstName, lastName, number, age, gender) => {
    addListUser(listUser.length,firstName, lastName, number, age, gender);
    setFirstName("");
    setLastName("");
    setNumber("");
    setAge("");
    setGender("");
    setError(prevState => prevState.map(item => ({...item, isError: 'first'})));
  };

  return (
    <form className={"container w-50 p-20 shadow p-3 mb-5 bg-white rounded form-horizontal"}>
      <Input
        value={firstName}
        setDataForm={data => setFirstName(data)}
        error={error[0]}
        setError={data => setError(data)}
        placeholder={"First Name"}
        id="first Name"
        type="text"
      />
      <Input
        value={lastName}
        setDataForm={data => setLastName(data)}
        error={error[1]}
        setError={data => setError(data)}
        placeholder={"Last Name"}
        id="last Name"
        type="text"
      />
      <Input
        value={number}
        setDataForm={data => setNumber(data)}
        error={error[2]}
        setError={data => setError(data)}
        placeholder={"Number"}
        id="number"
        type="number"
        country={"ua"}
        preferredCountries={["ua", "ru", "us"]}
      />
      <Input
        value={age}
        setDataForm={data => setAge(data)}
        error={error[3]}
        setError={data => setError(data)}
        placeholder={"Age"}
        id="age"
        type="number"
        max={99}
        min={18}
        step={1}
      />
      <p></p>
      <select className="custom-select" onChange={event => setGender(event.target.value)}>
        <option value={true}>man</option>
        <option value={false}>woman</option>
      </select>
      <button
        className={`w-100 btn btn-dark mt-3 ${!memoizedError && 'disabled'}`}
        disabled={!memoizedError}
        onClick={(event) => {createUser(firstName, lastName, number, age, gender); event.preventDefault();}}
      >
        send
      </button>
    </form>
  );
};

Form.propTypes = {
  addListUser: PropTypes.func.isRequired,
  listUser: PropTypes.array.isRequired,
};

export default Form;

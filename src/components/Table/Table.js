import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import sortUsers from "./sortUsers";

function Table({ listUser: users, deleteUser }) {
  const [usersSorted, setUsersSorted] = useState([]);

  useEffect(() => {
    setUsersSorted(users);
  }, [users, usersSorted]);

  return (
    <table className="shadow p-3 mb-5 bg-white rounded table table-hover">
      <thead className="thead-dark">
        <tr>
          <th onClick={() => sortUsers("id", usersSorted, setUsersSorted)}>
            #
          </th>
          <th
            onClick={() => sortUsers("firstName", usersSorted, setUsersSorted)}
          >
            firstName
          </th>
          <th
            onClick={() => sortUsers("lastName", usersSorted, setUsersSorted)}
          >
            lastName
          </th>
          <th onClick={() => sortUsers("number", usersSorted, setUsersSorted)}>
            number
          </th>
          <th onClick={() => sortUsers("age", usersSorted, setUsersSorted)}>
            age
          </th>
          <th onClick={() => sortUsers("gender", usersSorted, setUsersSorted)}>
            gender
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {usersSorted.map(user => {
          const { id, firstName, lastName, number, age, gender } = user;
          return (
            <tr key={id}>
              <th scope="row">{id}</th>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{number}</td>
              <td>{age}</td>
              <td>{gender ? 'man' : 'woman'}</td>
              <td className={"text-danger btn"} onClick={() => deleteUser(id)}>
                delete
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  listUser: PropTypes.array.isRequired
};

export default Table;

import { createStore } from "redux";
import { ACTION_TYPES } from "./actions";

const initialState = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : {
  listUser: [ {
          id: 0,
          firstName: "Yura",
          lastName: "Bobeshko",
          number: "+380 (99) 607 26 56",
          age: 22,
          gender: true
        },
        {
          id: 1,
          firstName: "noYura",
          lastName: "Znobenco",
          number: "+380 (99) 607 26 66",
          age: 21,
          gender: true
        },
        {
          id: 2,
          firstName: "Yura",
          lastName: "Bobeshko",
          number: "+380 (99) 607 26 56",
          age: 22,
          gender: true
        },
        {
          id: 3,
          firstName: "Vova",
          lastName: "Agrow",
          number: "+380 (99) 607 26 66",
          age: 21,
          gender: true
        },
        {
          id: 4,
          firstName: "Lena",
          lastName: "Gorobh",
          number: "+380 (99) 333 44 56",
          age: 65,
          gender: false
        },
        {
          id: 5,
          firstName: "Inna",
          lastName: "Brodenkowa",
          number: "+380 (99) 565 26 66",
          age: 44,
          gender: false
        }
      ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_LIST_USER: {
      const { payload } = action;
      return {
        ...state,
        listUser: [...state.listUser, payload]
      };
    }

    case ACTION_TYPES.DELETE_USER: {
      const { payload } = action;
      return {
        ...state,
        listUser: [...state.listUser.filter( user => user.id !== payload)]
      };
    }

    default:
      return state;
  }
}

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  localStorage.setItem("users", JSON.stringify(store.getState()));
  console.log(JSON.parse(localStorage.getItem("users")))
});

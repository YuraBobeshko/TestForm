const FormValidation = (data, type, setError) => {
  switch (type) {
    case "first Name":
      if (
        data.replace(/[а-я-a-z^0-1]/gi, "") ||
        data.length < 2 ||
        data.length >= 10
      ) {
        setError(prevState => {
          const state = [...prevState ];
          state[0].isError = true;
          return state;
        });
      } else {
        setError(prevState => {
          const state = [...prevState ];
          state[0].isError = false;
          return state;
        });
      }
      break;
    case "last Name":
      if (
        data.replace(/[а-я-a-z^0-1]/gi, "") ||
        data.length < 2 ||
        data.length >= 12
      ) {
        setError(prevState => {
          const state = [...prevState ];
          state[1].isError = true;
          return state;
        });
      } else {
        setError(prevState => {
          const state = [...prevState ];
          state[1].isError = false;
          return state;
        });
      }
      break;

    case "number":
      if (data.length !== 19) {
        setError(prevState => {
          const state = [...prevState ];
          state[2].isError = true;
          return state;
        });
      } else {
        setError(prevState => {
          const state = [...prevState ];
          state[2].isError = false;
          return state;
        });
      }
      break;
    case "age":
      if (data < 18 || data > 100) {
        setError(prevState => {
          const state = [...prevState ];
          state[3].isError = true;
          return state;
        });
      } else {
        setError(prevState => {
          const state = [...prevState ];
          state[3].isError = false;
          return state;
        });
      }
      break;
    case "gender":
      if (data === 'first') {
        setError(prevState => {
          const state = [...prevState ];
          state[4].isError = true;
          return state;
        });
      } else {
        setError(prevState => {
          const state = [...prevState ];
          state[4].isError = false;
          return state;
        });
      }
      break;

    default:
      break;
  }
};

export default FormValidation;

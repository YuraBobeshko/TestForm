const sort = {
  id: { name: "id", sorted: true },
  firstName: { name: "firstName", sorted: false },
  lastName: { name: "lastName", sorted: false },
  number: { name: "number", sorted: false },
  age: { name: "age", sorted: false },
  gender: { name: "gender", sorted: false }
};

function sortUsers(type, usersSorted, setUsersSorted) {
  sort[type].sorted = !sort[type].sorted;

  function stringSort(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  switch (type) {
    case "id":
      setUsersSorted(
        sort[type].sorted
          ? [...usersSorted.sort((a, b) => a.id - b.id)]
          : [...usersSorted.sort((a, b) => a.id - b.id).reverse()]
      );
      break;
    case "firstName":
      setUsersSorted(
        sort[type].sorted
          ? [
              ...usersSorted.sort((a, b) =>
                stringSort(a.firstName, b.firstName)
              )
            ]
          : [
              ...usersSorted
                .sort((a, b) => stringSort(a.firstName, b.firstName))
                .reverse()
            ]
      );
      break;
    case "lastName":
      setUsersSorted(
        sort[type].sorted
          ? [...usersSorted.sort((a, b) => stringSort(a.lastName, b.lastName))]
          : [
              ...usersSorted
                .sort((a, b) => stringSort(a.lastName, b.lastName))
                .reverse()
            ]
      );
      break;
    case "number":
      setUsersSorted(
        sort[type].sorted
          ? [...usersSorted.sort((a, b) => stringSort(a.number, b.number))]
          : [
              ...usersSorted
                .sort((a, b) => stringSort(a.number, b.number))
                .reverse()
            ]
      );
      break;
    case "age":
      setUsersSorted(
        sort[type].sorted
          ? [...usersSorted.sort((a, b) => a.age - b.age)]
          : [...usersSorted.sort((a, b) => a.age - b.age).reverse()]
      );
      break;
    case "gender":
      setUsersSorted(
        sort[type].sorted
          ? [...usersSorted.sort()]
          : [...usersSorted.sort().reverse()]
      );
      break;
    default:
      return usersSorted;
  }
}

export default sortUsers;

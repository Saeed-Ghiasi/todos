async function getTodos() {
  return await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then((response) => response.json());
}

export { getTodos };
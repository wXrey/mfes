const createStore = () => {
  let todos = [];
  const subscribers = [];

  return {
    get getStoreTodos() {
      return todos;
    },

    set addTodo(todo) {
      todos = [...todos, todo];
      subscribers.forEach((fn) => fn());
    },

    subscribe(fn) {
      subscribers.push(fn);
    },
  };
};

const store = createStore();

export default store;

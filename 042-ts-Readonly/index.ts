type Todo = {
  title: string;
  done: boolean;
};

const updatableTodo: Todo = {
  title: "Todo Title",
  done: false,
};

updatableTodo.done = true;

type DoneTodo = Readonly<Todo>;
const doneTodo: DoneTodo = {
  title: "Todo Title",
  done: false,
};

// Cannot assign to 'done'
doneTodo.done = true;

// Readonly Todo with Object Freeze
const transformTodo = Object.freeze(updatableTodo);
transformTodo.done = false;

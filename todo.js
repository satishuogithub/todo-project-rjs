import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Break Eggs', uniqueNo: 1 },
    { text: 'Pour them in hot water', uniqueNo: 2 },
    { text: 'Stir them cyclically to get omelet in a spiral pattern', uniqueNo: 3 },
  ]);

  const handleTodoStatusChange = (uniqueNo) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.uniqueNo === uniqueNo ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const handleDeleteTodo = (uniqueNo) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.uniqueNo !== uniqueNo));
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const userInput = e.target.userInput.value;
    if (userInput === '') {
      alert('Please enter a valid input');
      return;
    }

    const newTodo = {
      text: userInput,
      uniqueNo: todos.length + 1,
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
    e.target.userInput.value = '';
  };

  return (
    <>
      <div className="todo-bg-container" id="todo-Bg-Container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="todos-heading">To Dos</h1>
              <h1 className="create-task" id="createTask">
                Create <span className="create-task-subheading">Task</span>
              </h1>
              <form onSubmit={handleAddTodo}>
                <input type="text" className="todo-input my-3" placeholder="Enter what needs to be done here" name="userInput" />
                <button type="submit" className="btn btn-info btn-sm my-3">Add</button>
              </form>
              <ul className="todo-list-container" id="todoListContainer">
                {todos.map(todo => (
                  <li key={todo.uniqueNo} className={`listcontainer d-flex flex-row ${todo.checked ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      className="checkbox-style"
                      checked={todo.checked}
                      onChange={() => handleTodoStatusChange(todo.uniqueNo)}
                    />
                    <label className="mx-2 label-name" htmlFor={`checkbox${todo.uniqueNo}`}>
                      {todo.text}
                    </label>
                    <div className="fa-solid fa-trash-can trash-icon" onClick={() => handleDeleteTodo(todo.uniqueNo)}></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;

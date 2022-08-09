import React, { useState } from "react";
import EmptyPrompt from '../../components/EmptyState/EmptyPrompt';
import "./AddItem.css";
import "./ItemList.css";
import "./Button2.css";


const AddItem = (props) => {
  //Delete function
  const deleteHandler = (e) => {

  }

  //Empty state toggle
  const [toggle, setToggle] = useState(true);

  const [list, setList] = useState([]);
  const [enteredInput, setEnteredInput] = useState("");


  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    //add the todo to the list
    setList([...list, newTodo]);

    //clear input box
    setEnteredInput("");

  };

  const handleClick = () => {
    setToggle(!toggle);
  }; //ToggleclickHandler

  //prevents the form from submitting
  const addItemHandler = (event) => {
    event.preventDefault(); //prevents the form from submitting
    if (enteredInput.trim().length === '') {
      return;
    }
  };

  //  const itemChangeHandler = (event) => {
  //   setEnteredItem(event.target.value);
  //  };


  if (toggle) {
    return (
      <div>
        <form onClick={handleClick} className="js-form" onSubmit={addItemHandler}>
          <EmptyPrompt />
        </form>
      </div>
    )
  } else {
    return (
      <>
        <form
          onSubmit={addItemHandler}
          className='full-state'>
          <input
            autoFocus
            type="text"
            value={enteredInput}
            onChange={(e) => setEnteredInput(e.target.value)}
            aria-label="Enter a new todo item"
            placeholder="E.g. Build a web app"
            className="js-todo-input"
          />

          <button className='add-btn' onClick={(e) => addTodo(enteredInput)}
            type='submit'>Add</button>
        </form>

        <div className='todo-item'>
          <ul >
            {list.map((item) => (
              <li className="todo-item"
                key={item.id}>
                {item.todo}
                {/* <button className='del-btn'>&times;</button> */}
                <i onClick={deleteHandler} className="fa-solid fa-trash-can"></i>
              </li>
            ))}
          </ul>
        </div>

      </>
    )
  }
};

export default AddItem;

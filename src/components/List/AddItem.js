import React from 'react';

import './AddItem.module.css';

const AddItem = (props) =>  {
    const addItemHandler = (event) => {
        event.preventDefault();
    };

    return (
    <form onSubmit={addItemHandler}>
        <h2>Input your todo List</h2>
        <input type='text' />
        <button type='submit'> Add List</button>
    </form>
   
    );
};


export default AddItem;
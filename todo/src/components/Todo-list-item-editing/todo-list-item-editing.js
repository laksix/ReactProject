import React from "react";
import './todo-list-item-editing.css'
const TodoListItemEditing = () => {
    return (
        <li className='editing'>
            <div className='view'>
                <input className='toggle' type='checkbox'/>
                <label>
                <span className='description'>Editing task</span>
                <span className='created'>created 17 seconds ago</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
        </li>
    )
}

export default TodoListItemEditing
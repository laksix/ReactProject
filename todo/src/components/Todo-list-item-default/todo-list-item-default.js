import React from "react";
import './todo-list-item-default.css'
const TodoListItemDefault = () => {
    return (
        <li>
            <div className='view'>
                <input className='toggle' type='checkbox'/>
                <label>
                    <span className='description'>Active task</span>
                    <span className='created'>created 17 seconds ago</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
        </li>
    )
}

export default TodoListItemDefault
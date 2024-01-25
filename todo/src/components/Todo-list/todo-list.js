import React from 'react';
import TodoIistItemCopmleted from '../Todo-list-item-completed/todo-list-item-completed';
import TodoListItemEditing from '../Todo-list-item-editing';
import TodoListItemDefault from '../Todo-list-item-default';
import './todo-list.css'
const Todolist = () => {
    return (
    <ul className='todo-list'>
     <TodoIistItemCopmleted/>
     <TodoListItemEditing/>
     <TodoListItemDefault/>
    </ul>
    )
}

export default Todolist
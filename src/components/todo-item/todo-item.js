import React from "react";
import './todo-item.css';

import PropTypes from 'prop-types';
import activeItem from '../../img/icon-circle-png-23.jpg';
import completeItem from '../../img/174-512.png';


const ToDoItem = ({text, isCompleted, removeTask, id, completeTask}) => {
     return (
         <li className="todo-item">
             <div className="todo-item__text" onClick={() => completeTask(id)}><img src={isCompleted ?  completeItem : activeItem } alt=""/>
             <span className={isCompleted ? 'completed text' : 'text'}>{text}</span></div>
             <div onClick={() => removeTask(id)}><i className='fas fa-times'/></div>
         </li>
     )

};

ToDoItem.propTypes = {
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTask: PropTypes.func,
    id: PropTypes.number,
}

ToDoItem.defaultProps = {
    text: '',
    isCompleted: false,
    removeTask: () => {
    },
    id: 0,
}

export default ToDoItem;
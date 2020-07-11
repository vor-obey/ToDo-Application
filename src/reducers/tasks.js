import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from "../constants";
import { load } from "redux-localstorage-simple";

let initialState = load({ namespace: 'todo-list'});

if (!initialState || !initialState.tasks || !initialState.tasks.length) {
    initialState = {
        tasks: [],
    }
}


const tasks = (state = initialState.tasks, {id, text, isCompleted, type}) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    text,
                    isCompleted,
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK:
            return [...state].map(task => {
                if(task.id === id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            });
        default:
            return state;
    }
}

export default tasks;
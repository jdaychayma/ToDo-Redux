import { ADD_TASK, EDIT_TASK, COMPLETE_TASK, DELETE_TASK } from "./actions";
import { tasks } from "./states";

export const reducer = (state = tasks, action) => {
    let newTasks;
    switch (action.type) {
        case ADD_TASK:
            newTasks = [...state, action.payload]
            return newTasks
        case EDIT_TASK:
            newTasks = [...state];
            newTasks = newTasks.map(el => el.id === action.payload.id ? { ...el, description: action.payload.description } : el)
            return newTasks
        case COMPLETE_TASK:
            newTasks = [...state];
            newTasks = newTasks.map(el => el.id === action.payload ? { ...el, isDone: !el.isDone } : el)
            return newTasks
        case DELETE_TASK:
            newTasks = [...state];
            newTasks = newTasks.filter(el => el.id !== action.payload)
            return newTasks
        default:
            return state
    }
}
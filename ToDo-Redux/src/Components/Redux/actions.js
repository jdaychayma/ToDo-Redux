export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const LOGIN = "LOGIN";

export function addTask(task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function editTask(task) {
    return {
        type: EDIT_TASK,
        payload: task
    }
}

export function completeTask(taskId) {
    return {
        type: COMPLETE_TASK,
        payload: taskId
    }
}

export function deleteTask(taskId) {
    return {
        type: DELETE_TASK,
        payload: taskId
    }
}
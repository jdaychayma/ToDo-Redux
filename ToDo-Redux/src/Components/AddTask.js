import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from "./Redux/actions";

// Add a new task and with a condition to make sure that the user write a one

function AddTask({ login }) {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="p-2 text-danger">
                <h1>ToDo-App</h1>
            </div>
            <div className="row m-2">
                <input type="text" className="col form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <button className="btn btn-primary mx-2"
                    onClick={() => {
                        (description === " ") ? alert('You should add a Task') :
                            dispatch(addTask(
                                {
                                    id: Math.random(),
                                    description: description.trim(),
                                    isDone: false,
                                    role: login
                                }
                            ))
                        setDescription('')
                    }}>Add</button>
            </div>
        </div >
    )
}

export default AddTask

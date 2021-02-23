import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask, completeTask, deleteTask } from "./Redux/actions";

function Task({ task }) {
    const dispatch = useDispatch();
    const [editText, setEditText] = useState(task.description);
    const [edit, setEdit] = useState(false)
    let classes = "row mx-2 align-items-center mb-2 "
    return (

        <div className={(!task.isDone) ? classes : classes + "bg-success"}>
            <div className="col">
                {edit ? <input className="form-control" type="text" value={editText} onChange={(e) => setEditText(e.target.value)} /> : <h4>{task.description}</h4>}
            </div>

            {/* update the old task and make sur if the user let it empty make sure to get the old one  */}

            <button className="btn btn-primary m-2" onClick={() => {
                (!editText) ? setEditText(task.description) :
                    dispatch(editTask(
                        {
                            ...task,
                            description: editText
                        }
                    ))
                setEdit(!edit)
            }}>
                {edit ? "Update" : "Edit"}
            </button>
            <button className="btn btn-info m-2" onClick={() => dispatch(completeTask(task.id))}>{(!task.isDone) ? "Done" : "UnDone"}</button>
            <button className="btn btn-danger m-2" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div >
    )
}

export default Task

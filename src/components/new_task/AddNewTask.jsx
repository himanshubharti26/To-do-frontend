import React from "react";
import UpdateTask from "../update_task/UpdateTask";

const AddNewTask = ()=>{
    const task = {
        title:"",
        description:"",
        dueDate:""
    }
    return (
        <UpdateTask task = {task} heading={"Add New Task"}/>
    )
}

export default AddNewTask;
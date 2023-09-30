import React, { useState } from "react";
import "./Task.css";
import editIcon from "../../assets/edit-2.png"
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/delete.png";
import axios from "axios";
const Task = ({task, handleTaskDelete})=>{

    const [status, setStatus] = useState(task.status);
    const navigate = useNavigate();
    const baseURL = `http://localhost:9000/tasks/${task.id}`;
    console.log("task in item ==>", task.id);

    const handleChange = ()=>{
        let updateStatus = "";
        if(status === "COMPLETE"){
            setStatus("INCOMPLETE");
            updateStatus = "INCOMPLETE";
        }else{
            setStatus("COMPLETE");
            updateStatus = "COMPLETE";
        }

        try{
            axios.put(`http://localhost:9000/tasks/${task.id}`, {...task, status:updateStatus}).then(data=>{
                console.log("status updated success fully",data);
            })
        }catch(err){
            console.log(err);
        }
        
        
    }

    const handleEdit = ()=>{
        const id = task.id;
        navigate(`edit/${id}`);
    } 
    const handleDelete = () =>{
        axios.delete(`${baseURL}`).then(data=>console.log("data =>", data));
        handleTaskDelete(task.id);
        // window.location.reload();

    }  
    return (
        <div className = "item">
            <div className = "check-box">
                <input type = "checkbox" onChange = {handleChange}  checked = { status === "COMPLETE"?true:false } className="larger"/>
            </div>
            
            <div className = "mid-container">
                <div className = "title" >
                    <p style = {{color:status === "COMPLETE"?"lightgray":"#1C226B"}}>{task.title}</p>
                </div>
                <div className = "description">
                    <p>{task.description}</p>
                </div>
            </div>
            <div className="date">
                <p>{new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
            {status === "INCOMPLETE" && <>
            <div className="edit" onClick={handleEdit}>
                <img src = {editIcon} alt="edit-icon" height="100%" width="100%" color="yellow"/>
            </div>
            <div className="edit" onClick={(task)=>handleDelete(task.id)}>
                <img src={deleteIcon} alt="delete-icon" height="100%" width="100%" />
            </div>
            </>
            }
            
            
        </div>
    )
}

export default Task;
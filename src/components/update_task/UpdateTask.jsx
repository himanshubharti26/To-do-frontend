import React, {  useState } from "react";
import "./UpdateTask.css"
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateTask = ({task, heading})=>{

    if(task.dueDate!==""){
        task = {...task, dueDate: new Date(task.dueDate)}
    }else{
        task.dueDate = new Date();
    }
    // const [startDate, setStartDate] = useState(task.dueDate);
    const [newTask, setNewTask] = useState({...task});
    const navigate = useNavigate();
    const URL = useLocation();
    const baseURL = process.env.REACT_APP_BASE_URL;
    

    const handleChange = (e) =>{
        
        setNewTask({
            ...newTask,
            [e.target.name]:e.target.value
        })
    }

    const handleDate = (e)=>{
        console.log("element received ",e);
        setNewTask({
            ...newTask,
            dueDate:new Date(e)
        })
    }

    const handleCancel = ()=>{
        navigate('/');
    }

    const handleDone = () =>{
       console.log("path name ==> and task",URL.pathname, task);
        if(URL.pathname==="/new"){

            axios.post(`${baseURL}tasks/`,newTask).then(data=>{
                console.log("new data created:",data);
            }).catch(err=>{
                console.log("error while creating new task:",err);
            });
        }else{
            console.log("in else update");
            axios.put(`${baseURL}tasks/${newTask.id}`,newTask).then(data=>{
                console.log("new data created:",data);
            }).catch(err=>{
                console.log("error while creating new task:",err);
            });
        }
        navigate('/');
    }

    return (
    <div className="form">
        
        <div className="new-head">
            <h2>{heading}</h2>
        </div>
        
        
        <div className="container">
            
            <label className="label">
                Title:
                <input type="text" name="title" className="inp" value={newTask.title} onChange = {(e)=>handleChange(e)}/>
            </label>
        
            <label className="label">
                Description : 
                
                <textarea name="description" id="" cols="25" rows="5" className="text-area" onChange = {(e)=>handleChange(e)} value={newTask.description}></textarea>
            </label>
        
            <label className="label">
                Due Date :
                <DatePicker 
                    name="dueDate"
                    selected={newTask.dueDate} 
                    onChange={(e)=>handleDate(e)}
                    dateFormat="yyyy/MM/dd"
                    className="inp date-inp"
                    
                />
            </label> 
        </div>
        <div className="act-but">
            <button id="cancel" onClick={handleCancel}>
                Cancel
            </button>
            <button id="done" onClick={handleDone}>
                Done
            </button>
        </div>
    </div>
    )


}

export default UpdateTask;
import React, { useEffect, useState } from "react";
// import AddNewTask from "../AddNewTask";
import "./List.css";
import Task from "../task/Task";


const List = ()=>{
    // const list = [
    //     {
    //         title:"Buy Egg",
    //         description: "From nesto 6 pcs.",
    //         dueDate:"28/09/2023",
    //         status: "COMPLETE"
    //     },
    //     {
    //         title:"Hair cut",
    //         description: "Famous barber",
    //         dueDate:"2/10/2023",
    //         status: "INCOMPLETE"
    //     },
    //     {
    //         title:"Todo list",
    //         description: "Assignment from Krish",
    //         dueDate:"29/10/2023",
    //         status: "INCOMPLETE"
    //     }
    // ]
    
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(()=>{
        const baseURL = process.env.REACT_APP_BASE_URL;
        fetch(`${baseURL}tasks`)
        .then(data=>data.json())
        .then(({allTasks})=>{
            setList(allTasks );
            setLoading(false);
            // console.log("list ==>",list);
        }).catch(err=>{
            console.log("error in fetching all tasks: ",err?.message);
        })

    },[]);

    const handleDelete = (id)=>{
        const newList = list.filter(task=>id!==task.id)
        setList(newList);
    } 
    
    return (
        <>
            {
                loading&&<h3>Loading ...</h3>
                
            }
            {
                !loading && list.length>0 &&<div className="heading">
                <div className="head-item">
                    <p>Status</p>
                </div >
                <div id="task" className="head-item">
                    <p>Task</p>
                </div>
                <div className="head-item">
                    <p>Due Date</p>
                </div>
                <div id="edit" className="head-item">
                    <p>Edit</p>
                </div>
                <div id="delete"className="head-item">
                    <p>Delete</p>
                </div>
            </div>}
            {!loading && list.length > 0 && list.map((task,index)=>{
                // console.log("task = >",task);
                return <Task task = {task} key={index} handleTaskDelete={handleDelete} />
            })}
            
            
        </>
    );
}

export default List;
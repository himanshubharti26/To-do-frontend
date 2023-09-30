import React, { useEffect, useState } from "react";
import UpdateTask from "../update_task/UpdateTask";
import { useParams } from "react-router-dom";



const EditTask = ()=>{
    const baseURL = process.env.REACT_APP_BASE_URL;
    const {id} = useParams();
    console.log("id in url ===> ",id);
    const url = `${baseURL}tasks/${id}`;
    const [task, setTask] = useState({
        title:"",
        description:"",
        dueDate:""
    });
    const [ loading, setLoading] = useState(true);
    useEffect(()=>{
        if(URL.pathname != "/new" ){
            fetch(url)
            .then(data=>data.json())
            .then(data=>{
               
                setTask(data.task);
                setLoading(false);
                console.log("data fetched for task:", data.task);
            }).catch(err=>{
                console.log("error in fetching task details");
            })
        }
        
    },[])
    return (<>
        { !loading&&<UpdateTask task = {task} heading={"Edit Task"}/>   }
        </>
    )
}

export default EditTask;
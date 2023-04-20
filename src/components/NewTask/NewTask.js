import React, { useState } from "react";

import style from '../NewTask/NewTask.module.css';

const NewTask=(props)=>{

    const [task,setTask] = useState({
        title:'',des:''
    }); 

    const {title,des} = task;

    const handelSubmit =(event)=>{
        event.preventDefault();
        props.onAddTask(task); 
        setTask({title:'',des:''})
    }


    const handelChange=(event)=>{
        const name = event.target.name;
        setTask((oldTodo)=>{
            return{
                ...oldTodo,[name]:event.target.value
            }
        })
    }

    return(
        <form className={style.form} onSubmit={handelSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" value={title} onChange={handelChange}/>
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="des">Description</label>
                <textarea name="des" id="des" value={des}  onChange={handelChange}></textarea>
            </div>
            <button type="submit">add Task</button>
        </form>
    )
}

export default NewTask;  
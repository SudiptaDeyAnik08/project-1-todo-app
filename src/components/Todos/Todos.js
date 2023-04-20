import React from "react";


import SingleTask from "../SingleTask/SingleTask";
import style from './Todos.module.css'

const   Todos = (props)=>{
    console.log(props.todos)
    return(
        <section className={style.todos}>
           
            {
                props.todos.map((res)=> <SingleTask task={res} ></SingleTask> )
            }   
        </section>
    )
}

export default Todos;
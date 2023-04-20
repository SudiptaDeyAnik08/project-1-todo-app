import React, { useState } from "react";
import Todos from "../Todos/Todos";

import {v4 as uuid4} from 'uuid';

// import './Home.module.css';
import style from '../Home/Home.module.css'
import NewTask from "../NewTask/NewTask";

const dummyTask = [
    {
        id:1,
        title:"Task title 1",
        des:"Task 1 Description is Here...."
    },
    {
        id:2,
        title:"Task title 2",
        des:"Task 2 Description is Here...."
    }
]

const Home = ()=>{

    const [task,setTask] = useState(dummyTask);


    const handelTask=(newTask)=>{
        setTask((prevoisuTask)=>{
            return [...prevoisuTask,{id:uuid4(),newTask}]
        })
    }


    return(
        <div className={style.container}>
            
            <h1 style={{color:"white"}}>Todo App</h1>
            <NewTask onAddTask={handelTask}></NewTask>
            <Todos todos={task}></Todos>
        </div>
    )
}
export default Home;
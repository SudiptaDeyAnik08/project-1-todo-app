import React from "react";

import style from './SingleTask.module.css'

const SingleTask = (props)=>{
    // let {des,title} = props.task.newTask;
   console.log(props.task.newTask);
    return(
        <article className={style.todo}>
            <div>
                {/* <h2>{title}</h2>
                <p>{des}</p> */}
            </div>
            <button className={style.btn}>
                <i className="fa fa-trash fa-2x"></i>
            </button>
        </article>
    )
}

export default SingleTask;
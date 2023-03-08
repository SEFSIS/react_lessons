import {useEffect, useState} from "react";

import {CompleteTask} from "../CompleteTask/CompleteTask";
import {tasksService} from "../../services";


const CompleteTasks = () => {
    const [tasks,setTasks]=useState([]);

    useEffect(()=> {
        tasksService.getAll().then(({data})=> setTasks([...data]))
    },[])

    return (
        <div>
            {tasks.map(task => <CompleteTask key={task.id} task={task}/>)}
        </div>
    );
};
export {CompleteTasks};


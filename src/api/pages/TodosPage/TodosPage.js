import {useEffect, useState} from "react";

import {todosRequest} from "../../requests/todosRequest";
import {TodosList} from "../../../components/todosList/TodosList";

const TodosPage = () => {
    const [todosList, setTodosList]=useState();

    useEffect( ()=> {
       todosRequest.getAll().then(({data}) => setTodosList([...data]))
    },[]);

    return (
        <div style = {{width:'100%', margin: '0 auto'}}>
            <h1> Todos Page </h1>
            <TodosList todosList={todosList}/>
        </div>
    );
};
export {TodosPage};


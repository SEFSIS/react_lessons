import {UsersForm} from "./components/users_form/UsersForm";
import {Users} from "./components/users/Users";
import {useEffect, useState} from "react";
import {usersRequests} from "./api/requests/usersRequests";
import {Comments} from "./components/comments/Comments";
import {CommentsForm} from "./components/comments_form/CommentsForm";
import {commentRequests} from "./api/requests/commentRequests";

const App = () => {
    // const[users,setUsers]=useState([]);
    // useEffect(()=>{
    //     usersRequests.getAll().then(({data}) => setUsers([...data]))
    // },[])
    const[comments,setComments]=useState([]);
    // const [state,setState]=useState([1,2,3,4]);
    // console.log(state);
    useEffect(()=>{
        commentRequests.getAll().then(({data}) =>  setComments([...data]))
    },[])
    return (
        <div style ={{textAlign:"center"}}>
            {/*<UsersForm setUsers={setUsers}/>*/}
            {/*<hr/>*/}
            {/*<Users users={users}/>*/}
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
            {/*<div style={{margin: 300}}>*/}
            {/*    <button onClick={()=>setState((prevState)=>[...prevState,5,6,7,8,9,10])}> PrevState</button>*/}
            {/*</div>*/}
        </div>
    );
};

export {App};




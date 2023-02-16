import {useEffect, useState} from "react";
import {postService} from "../../services/postService/postService";
import {Post} from "../Post/Post";

const Posts = () => {
    const[posts,setPosts]=useState([]);
    const[postDetails,setPostDetails]=useState(null);
    const[count,setCount]=useState(0);

    useEffect(()=>{
        postService.getAll().then(value=>value.data).then(value=>setPosts([...value]))
    },[count])





    return (
        <div>
         <h1>Post Details:</h1>
            {postDetails && <div>id:{postDetails.id}
                <div>userId:{postDetails.userId} </div>
                <div>title:{postDetails.title} </div>
                <div>body:{postDetails.body} </div>
            </div>}
            <hr/>
            <h1>Posts:</h1>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
};
export {Posts};


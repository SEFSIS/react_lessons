import {useEffect, useState} from "react";
import {postService} from "../../services/postService/postService";
import {Post} from "../Post/Post";

const SinglePost =()=>{
    const[post,setPost]=useState(null);
    useEffect(()=>{
      postService.getById(5).then(value => value.data).then(value => setPost(value));
    });

    return(
       <div>
           {post && <Post post={post}/>}
       </div>
    );
};

export {SinglePost};
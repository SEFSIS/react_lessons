import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsRequest} from "../../requests/postsRequest";
import {RouterEndpoints} from "../../../routes/routes";

const PostByCommentPage = () => {
    const {postId} =useParams();
    const navigate = useNavigate();
    const [post,setPost]=useState(null);
    useEffect(()=>{
        if(postId){
            postsRequest.getPostById(postId) .then(({data}) => setPost({...data}));
        }
    },[postId])
    if (!post) return null;
    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <div>PostID:{postId}</div>
            <div>Title:{post.title}</div>
            <div>Content:{post.body}</div>
            <button onClick={()=>navigate(-1)}>{'<'}Back</button>
            <button onClick={()=>navigate(`/${RouterEndpoints.comments}`)}>Hide</button>
        </div>
    );
};
export {PostByCommentPage};


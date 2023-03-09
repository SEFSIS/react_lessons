import {useEffect, useState} from "react";
import {commentService} from "../../services";
import {useNavigate} from "react-router-dom";

const Details = ({postId,state}) => {
    const [post, setPost] = useState(null);
    useEffect(()=> {
        if(state){
            console.log(state);
            setPost({...state})
        }else {
            commentService.getById(postId).then(({data}) => {
                setPost(data)
            })
        }
    },[postId])




    return(
        <div>
            {post &&
                <>
                    <div>id:{post.id}</div>
                    <div>userId:{post.userId}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.body}</div>
                </>
            }
        </div>
    )
};
export {Details};
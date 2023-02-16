import {useEffect, useState} from "react";
import {userPostService} from "../../services";
import {UserPost} from "../UserPosts/UserPost";

const UsersPosts = ({userId}) => {
    const [usersPosts, setUsersPosts]=useState([]);

    useEffect(() => {
      userPostService.getByUserId(userId).then(({data}) => setUsersPosts([...data]))
    },[userId])

    return (
        <div>
            {usersPosts.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};
export {UsersPosts};


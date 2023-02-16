import {useState} from "react";

import {Posts, UsersPosts} from "./components";
import {SpaceX} from "./components";
import {Users} from "./components";



const App = () => {
    const [userId,setUserId]=useState(null);
    return (
        <div>
            {/*<Posts/>*/}
            {/*<SpaceX/>*/}
            <Users setUserId={setUserId}/>
            {userId && <UsersPosts userId={userId}/>}
        </div>
    );
};

export {App};




import {axiosService} from "../axiosService/axiosService";

const userPostService={
    getByUserId:(userId)=>axiosService.get(`/posts`,{params:{userId}})
}


export{
    userPostService
}
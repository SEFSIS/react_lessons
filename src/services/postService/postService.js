import {axiosService} from "../axiosService/axiosService";

const postService={
    getAll: ()=> axiosService.get('/posts'),
    getById:(id)=>axiosService.get(`/posts/${id}`)
}

export{
    postService
}
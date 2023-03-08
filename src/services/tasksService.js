import {axiosService} from "./axiosService";
import {urls} from "../configs";

const tasksService ={
    getAll:()=> axiosService.get(urls.todos)
}


export {
    tasksService
}
import {requestsLinks} from "../endpoints";
import {axiosRequest} from "../../utils/axiosConfig";

export const todosRequest = {
    getAll:()=> axiosRequest.get(requestsLinks.todos)
}


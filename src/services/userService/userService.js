import {axiosService} from "../axiosService/axiosService";

const userService = {
    getAll: () => axiosService.get('/users')

}


export {
    userService
}
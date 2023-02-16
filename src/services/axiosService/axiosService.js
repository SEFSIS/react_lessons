import axios from "axios";

const axiosService=axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

const axiosSpaceXService=axios.create({baseURL:'https://api.spacexdata.com/v3/launches/'});


export{
    axiosService,axiosSpaceXService
}

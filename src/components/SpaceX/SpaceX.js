import {useEffect, useState} from "react";
import {axiosSpaceXService} from "../../services/axiosService/axiosService";

const SpaceX = () => {
    const[flights,setFlights]=useState([]);

    useEffect(()=> {
        axiosSpaceXService.get().then(value=>value.data).then(value => setFlights([...value]))
    })
    return (
        <div>
        <h1>SpaceX</h1>
            <ul>
                {flights.filter(data => data.launch_year !== '2020').map(item =>
                    <li key={item.id}>{item.mission_name} {item.launch_year}
                        <div><img src={item.links.mission_patch_small} alt={item.links.mission_patch_small}/></div>
                    </li>)
                }
            </ul>
        </div>
    );
};
export {SpaceX};


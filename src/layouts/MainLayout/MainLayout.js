import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../../components";


const MainLayout = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Header/>
            <button onClick={()=>navigate(-1)}>prev</button>
            <button onClick={()=>navigate(1)}>next</button>
            <Outlet/>
        </div>
    );
};
export {MainLayout};


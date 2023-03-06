import css from './Header.module.css';

import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            {/*<Link to={"/"}>home</Link>*/}
            {/*<Link to={"/users"}>users</Link>*/}
            {/*<Link to={"/posts"}>posts</Link>*/}
            {/*<Link to={"/about"}>about</Link>*/}
            <NavLink to={""}>home</NavLink>
            <NavLink to={"users"}>users</NavLink>
            <NavLink to={"posts"}>posts</NavLink>
            <NavLink to={"about"}>about</NavLink>
        </div>
    );
};
export {Header};


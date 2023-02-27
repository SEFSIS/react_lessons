// import {User} from "../User/User";
// import {useEffect, useState} from "react";
//
// const Users = () => {
//  const [users,setUsers]=useState([]);
//
//     //useState перезавантажує заново компоненту
//     //useEffect знає, що цей fetch потрібно запустити лише один раз, коли стартанула наша компонента.В другий параметр ми
//     //маємо покласти масив залежностей. Якщо масив звлежностей пустий, то в такому разі цей useEffect відпрацює тільки один раз
//     //Щоб імпортнути з реакту потрібно натиснути alt+enter => Insert input
//
//      //Запуститься наша компонента ми проініціалізуємо users пустим масивом, далі виконається один єдиний раз fetch, але поки він виконуватиметься
//     // спочатку він намагатиметься промапати наш пустий масив в нього нічого не вийде і в кінці десь там він отримає відповідь з jsonplaceholder
//     // і тут вже в роботу включиться setUsers і засетає туди свіжі дані це в свою чергу змусить нашу компоненту перезавантажитись
//
//     const [count,setCount]=useState(0);
//
//
// useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(value => setUsers(value))
// },[count])
// // тепер useEffect ще й слідкує за змінною count, якщо count зміниться то він знову викличе оцей весь колбек
//
//     return (
//         <div>
//             <button onClick={()=> setCount(prevState => prevState+1)}>Click</button>
//             {users.map(user => <User key={user.id} user={user}/>)}
//         </div>
//     );
// };
// export {Users};
import {User} from "../User/User";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../../services";
import {userService} from "../../services";

const Users = () => {
    const [users,setUsers]=useState([]);
    const [count,setCount]=useState(0);
    const[userDetails, setUserDetails]=useState(null);


    useEffect(()=>{
        //Перший варіант
        //     axios.get('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value=>setUsers([...value]))
        // },[count])
        // get  ми отримуємо завжди дані з апішки

        //Другий варіант
        //     axiosService.get('/users').then(value => value.data).then(value=>setUsers([...value]))
        // },[count])

        //Третій варіант
      userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, [count])

    return (

        <div>
            <h1>UserDetails:</h1>
            {/*{userDetails && <User user={userDetails}/>}*/}
            {userDetails && <div>{userDetails.id}----------{userDetails.email}</div>}
            <hr/>
            <h1>Users:</h1>
            {/*<button onClick={()=> setCount(prevState => prevState+1)}>Click</button>*/}
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
        </div>
    );
};
export {Users};


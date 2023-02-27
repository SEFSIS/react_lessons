import {useState} from "react";

const Count = () => {

    // const arr = useState();
    // const b = arr[0];
    // const setB = arr[1];
    const [b, setB] = useState(0);//Деструктуризація;
    console.log('Count');


    // const inc = () => {
    //     // setB(b + 1);
    //     setB(prevState=> prevState+1);
    //     //Попереднє значення + 1
    //}

    return (
        <div>
            <div>B:{b}</div>
            <button onClick={() => setB( prevState=> prevState+1)}>Inc</button>
        </div>
    );
};
export {Count};


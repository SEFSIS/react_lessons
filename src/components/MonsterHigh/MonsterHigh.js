
const MonsterHigh = (props) => {
    const{monster:{name,image}}=props;

// ******************************************
// const MonsterHigh = ({monster}) => {
// const{name,image}=monster;

    // const MonsterHigh = (props) => {
    // const{name,image}=props;
    // const{monster}=props;
    return (
        <div>

{/*//**************************************************/}
            <div>name: {name}</div>
            <img src={image} alt={name}/>

            {/*--------------------------------*/}
            {/*<div>name: {name}</div>*/}
            {/*<img src={image} alt={name}/>*/}
            {/*<div>*/}
            {/*------------------------------------------*/}
            {/*<div>name: {monster.name}</div>*/}
            {/*<img src={monster.image} alt={monster.name}/>*/}

        </div>

    );
};
export {MonsterHigh};


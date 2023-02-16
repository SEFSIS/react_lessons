import {MonsterHigh} from "../MonsterHigh/MonsterHigh";

const Monsters = () => {
    const monsters=[
        {
            id:7,
            name:'Skelita Calaveras',
            image:'https://static.wikia.nocookie.net/monsterhigh/images/c/c6/Skelita_Calaveras%E2%84%A2.png'
        },
        {
            id:8,
            name:' Abbey Bominable',
            image:'https://static.wikia.nocookie.net/monsterhigh/images/d/dd/Abbey_Bominable%E2%84%A2.png'
        },
        {
            id:9,
            name:'Luna Mothews',
            image:'https://static.wikia.nocookie.net/monsterhigh/images/8/85/Profile_art_-_Luna_Mothews.png'
        }
    ]
    return (

            <div>
                {
                    monsters.map(monster=><MonsterHigh key={monster.id} monster={monster}/>)
                }
            </div>

    );
};
export {Monsters};


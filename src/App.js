import {MonsterHigh} from "./components/MonsterHigh/MonsterHigh";
import {Monsters} from "./components/Monsters/Monsters";
import {Characters} from "./components/Characters/Characters";

const App = () => {
    {/*Четвертий варіант*/}
    // const persons=[
    //     {
    //         id:1,
    //         name:'Clawdeen Wolf',
    //         image:'https://static.wikia.nocookie.net/monsterhigh/images/2/23/Clawdeen_Wolf%E2%84%A2.png'
    //     },
    //     {
    //         id:2,
    //         name:'Elissabat',
    //         image:'https://static.wikia.nocookie.net/monsterhigh/images/5/59/Elissabat%E2%84%A2.png'
    //     }
    // ]

    {/*П'ятий варіант*/}
    // const monsters=[
    //     {
    //         id:7,
    //         name:'Skelita Calaveras',
    //         image:'https://static.wikia.nocookie.net/monsterhigh/images/c/c6/Skelita_Calaveras%E2%84%A2.png'
    //     },
    //     {
    //         id:8,
    //         name:' Abbey Bominable',
    //         image:'https://static.wikia.nocookie.net/monsterhigh/images/d/dd/Abbey_Bominable%E2%84%A2.png'
    //     },
    //     {
    //         id:9,
    //         name:'Luna Mothews',
    //         image:'https://static.wikia.nocookie.net/monsterhigh/images/8/85/Profile_art_-_Luna_Mothews.png'
    //     }
    // ]
  return (
      <div>
          <Monsters/>
          <Characters/>
          {/*Перший варіант*/}
          {/*<div>*/}
          {/*    <div>name: Cleo DeNile</div>*/}
          {/*    <img src="https://static.wikia.nocookie.net/monsterhigh/images/8/82/Profile_art_-_Cleo_de_Nile.jpg" alt="Cleo DeNile"/>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*    <div>name:  Frankie Stein</div>*/}
          {/*    <img src="https://static.wikia.nocookie.net/monsterhigh/images/3/3b/Profile_art_-_Frankie_Stein_chilling.jpg" alt=" Frankie Stein"/>*/}
          {/*</div>*/}

          {/*Другий варіант*/}
          {/*<MonsterHigh name={'Cleo'}*/}
          {/*             image={"https://static.wikia.nocookie.net/monsterhigh/images/8/82/Profile_art_-_Cleo_de_Nile.jpg"}/>*/}
          {/*<MonsterHigh name={'Frankie Stein'}*/}
          {/*             image={"https://static.wikia.nocookie.net/monsterhigh/images/3/3b/Profile_art_-_Frankie_Stein_chilling.jpg"}/>*/}

          {/*Третій варіант*/}
          {/*{*/}
          {/*    [*/}
          {/*        <MonsterHigh key={3} name={'Draculaura'}*/}
          {/*                     image={"https://static.wikia.nocookie.net/monsterhigh/images/0/0e/Profile_art_-_Draculaura.png"}/>,*/}
          {/*        <MonsterHigh key={4} name={'Lagoona Blue'}*/}
          {/*                     image={"https://static.wikia.nocookie.net/monsterhigh/images/7/7c/Profile_art_-_Lagoona_Blue.jpg"}/>*/}
          {/*    ]*/}
          {/*}*/}

          {/*Четвертий варіант*/}
          {/*<div>*/}
          {/*    {*/}
          {/*        persons.map(person => <MonsterHigh key={person.id} name={person.name} image={person.image}/>)*/}
          {/*    }*/}
          {/*</div>*/}

          {/*П'ятий варіант*/}
          {/*<div>*/}
          {/*    {*/}
          {/*        monsters.map(monster=><MonsterHigh key={monster.id} monster={monster}/>)*/}
          {/*    }*/}
          {/*</div>*/}
      </div>
  );
};

export {App};




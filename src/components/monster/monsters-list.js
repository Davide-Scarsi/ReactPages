import BoarImg from '../../images/boar.png'
import WolfImg from '../../images/wolf.png'


let boar
let wolf


export const monstersList = [
    boar = {
        id: 1,
        name: "Boar",
        maxHp: 200,
        hpMultiplayer: 2,
        currentHp: 100,
        mobImg: BoarImg,
        attack: 30,
        defence: 0
    },

    wolf = {
        id: 2,
        name: "Wolf",
        maxHp: 120,
        hpMultiplayer: 1.2,
        currentHp: 100,
        mobImg: WolfImg,
        attack: 60,
        defence: 0
    }
]

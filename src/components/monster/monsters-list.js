import BoarImg from '../../images/boar.png'
import WolfImg from '../../images/wolf.png'
import BearImg from '../../images/bear.png'


let boar
let wolf
let bear

export const monstersList = [
    boar = {
        id: 1,
        name: "Boar",
        maxHp: 200,
        hpMultiplayer: 2,
        currentHp: 100,
        mobImg: BoarImg, 
        attack: 30,
        defence: 0,
        hitChance: 100
    },

    wolf = {
        id: 2,
        name: "Wolf",
        maxHp: 120,
        hpMultiplayer: 1.2,
        currentHp: 100,
        mobImg: WolfImg,
        attack: 60,
        defence: 0,
        hitChance: 100
    },

    bear = {
        id: 3,
        name: "Bear",
        maxHp: 300,
        hpMultiplayer: 3,
        currentHp: 100,
        mobImg: BearImg,
        attack: 100,
        defence: 0,
        hitChance: 40
    }
]

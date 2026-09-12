export const gameState = {

    boardSize:7,

    player:{

        character:null,

        x:3,
        y:3,

        hp:100,

        baseAP:5,

        currentAP:5,

        moveCost:1,

        skills:{
            Q:null,
            E:null
        }

    }

};

export function loadCharacter(character){

    gameState.player.character=character.name;

    gameState.player.baseAP=character.baseAP;
    gameState.player.currentAP=character.baseAP;

    gameState.player.moveCost=character.moveCost;

    gameState.player.hp=character.maxHP;

}

export function resetAP(){

    gameState.player.currentAP=gameState.player.baseAP;

}
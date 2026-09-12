export const BOARD_SIZE = 7;

export let player = {
    x: 3,
    y: 3
};

export function createBoard(){

    const board=document.getElementById("board");

    board.innerHTML="";

    board.style.gridTemplateColumns=`repeat(${BOARD_SIZE},60px)`;

    for(let y=0;y<BOARD_SIZE;y++){

        for(let x=0;x<BOARD_SIZE;x++){

            const tile=document.createElement("div");

            tile.className="tile";

            if(player.x===x&&player.y===y){
                tile.classList.add("player");
            }

            board.appendChild(tile);

        }

    }

}
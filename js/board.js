export const BOARD_SIZE = 7;

export function createBoard(){

    const board = document.getElementById("board");
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${BOARD_SIZE},60px)`;

    for(let y=0;y<BOARD_SIZE;y++){
        for(let x=0;x<BOARD_SIZE;x++){

            const tile=document.createElement("div");
            tile.className="tile";

            if(x===3 && y===3){
                tile.classList.add("player");
            }

            board.appendChild(tile);
        }
    }
}
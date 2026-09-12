export const BOARD_SIZE = 7;

export const player = {
    x: 3,
    y: 3
};

export function createBoard(movePreview = [], skillPreview = []) {

    const board = document.getElementById("board");

    board.innerHTML = "";

    board.style.gridTemplateColumns =
        `repeat(${BOARD_SIZE},60px)`;

    for(let y=0;y<BOARD_SIZE;y++){

        for(let x=0;x<BOARD_SIZE;x++){

            const tile=document.createElement("div");
            tile.className="tile";

            const ground=document.createElement("div");
            ground.className="layer-ground";

            const move=document.createElement("div");
            move.className="layer-move";

            const skill=document.createElement("div");
            skill.className="layer-skill";

            const playerLayer=document.createElement("div");
            playerLayer.className="layer-player";

            const effect=document.createElement("div");
            effect.className="layer-effect";

            const ghost=
                movePreview.find(p=>p.x===x&&p.y===y);

            if(ghost){

                move.style.opacity=ghost.alpha;

                move.innerHTML=
                    `<span>${ghost.step}</span>`;

            }

            const skillCell=
                skillPreview.find(p=>p.x===x&&p.y===y);

            if(skillCell){

                skill.style.opacity=skillCell.alpha;

            }

            if(player.x===x&&player.y===y){

                playerLayer.classList.add("player");

            }

            tile.append(
                ground,
                move,
                skill,
                playerLayer,
                effect
            );

            board.appendChild(tile);

        }

    }

}
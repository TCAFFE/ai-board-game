export const BOARD_SIZE = 7;

export const player = {
    x: 3,
    y: 3
};

export function createBoard(preview = []) {

    const board = document.getElementById("board");

    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 60px)`;

    for (let y = 0; y < BOARD_SIZE; y++) {

        for (let x = 0; x < BOARD_SIZE; x++) {

            const tile = document.createElement("div");
            tile.className = "tile";

            // 현재 플레이어
            if (player.x === x && player.y === y) {
                tile.classList.add("player");
            }

            // 이동 미리보기
            const ghost = preview.find(p => p.x === x && p.y === y);

            if (ghost) {
                tile.classList.add("ghost");
                tile.style.setProperty("--ghost-alpha", ghost.alpha);
                tile.textContent = ghost.step;
            }

            board.appendChild(tile);

        }

    }

}
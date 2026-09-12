const characters = [
"G.PT",
"P.P.L-XitY",
"Q-W4yne",
"GeMinI",
"G.roK",
"Li-tun",
"lil cl4ude",
"Gigantic Duo",
"Deep$ick",
"サK4-na",
"Co.piLot",
"Quad Core",
"C.lov4",
"cO-h3r€"
];

const hostBtn=document.getElementById("hostBtn");
const joinBtn=document.getElementById("joinBtn");
const characterSelect=document.getElementById("characterSelect");
const characterGrid=document.getElementById("characterGrid");

let selectedCharacter=null;

hostBtn.onclick=openCharacterSelect;
joinBtn.onclick=openCharacterSelect;

function openCharacterSelect(){

    characterSelect.classList.remove("hidden");

    characterGrid.innerHTML="";

    characters.forEach(name=>{

        const card=document.createElement("div");

        card.className="characterCard";

        card.innerText=name;

        card.onclick=()=>{

            selectedCharacter=name;

            document.querySelectorAll(".characterCard")
            .forEach(c=>c.classList.remove("selected"));

            card.classList.add("selected");

            console.log("선택:",selectedCharacter);

        };

        characterGrid.appendChild(card);

    });

}
export let actionQueue=[];

export function addAction(type,value){

    actionQueue.push({
        order:actionQueue.length+1,
        type,
        value
    });

    renderQueue();

}

export function resetQueue(){

    actionQueue=[];

    renderQueue();

}

export function renderQueue(){

    const list=document.getElementById("queue");

    list.innerHTML="";

    actionQueue.forEach(action=>{

        const li=document.createElement("li");

        li.textContent=`${action.order}. ${action.value}`;

        list.appendChild(li);

    });

}
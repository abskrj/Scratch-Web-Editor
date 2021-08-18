var count = 0;

export function allowDrop(ev) {
    ev.preventDefault();
}
  
export function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
}

export function drop(ev) {
    ev.preventDefault();

    const id = ev.dataTransfer.getData("text/html");

    if (id.startsWith('dragged') || !id) {
        return;
    }

    const nodeCopy = document.getElementById(id).cloneNode(true);

    nodeCopy.id = 'dragged' + id + count++;

    nodeCopy.addEventListener('dragstart', drag);
    
    ev.target.appendChild(nodeCopy);
}

export function deleteDiv(ev) {
    ev.preventDefault();

    const id = ev.dataTransfer.getData("text/html");

    if (!id.startsWith('dragged')) {
        return;
    }
    const el = document.getElementById(id);
    el.parentNode.removeChild( el );
}
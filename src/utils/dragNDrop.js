var count = 0;
import { addCommand, removeTab } from '../redux/action';
import store from './../redux/store';

export function allowDrop(ev) {
    ev.preventDefault();
}

export function drag(ev) {
    ev.dataTransfer.setData('dragId', ev.target.id);
}

export function drop(ev) {
    ev.preventDefault();

    const id = ev.dataTransfer.getData('dragId');

    if (!id || id.startsWith('dragged') || id.startsWith('sprite')) {
        return;
    }

    const nodeCopy = document.getElementById(id).cloneNode(true);

    nodeCopy.id = 'dragged' + id + count++;

    const sprite = store.getState().currentTab;
    store.dispatch(addCommand(sprite, nodeCopy.id, nodeCopy.textContent));

    nodeCopy.addEventListener('dragstart', drag);

    ev.target.appendChild(nodeCopy);
}

export function deleteDiv(ev, force = false) {
    ev.preventDefault();

    const id = ev.dataTransfer.getData('dragId');

    if (!id.startsWith('dragged') && !force) return;

    const el = document.getElementById(id);
    el.parentNode.removeChild(el);
}

export function deleteSprite(ev) {
    const id = ev.dataTransfer.getData('dragId');
    if (!id.startsWith('sprite')) return;
    store.dispatch(removeTab(id.split('-')[1]));
}
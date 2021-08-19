import toast from 'react-hot-toast';
import { makeRangeIterator, moveCat, sleepFor, turnCat } from './utility';

export const controlCommands = async (cmd) => {
    const splitCmd = cmd.split(' ');
    switch (splitCmd[0]) {
        case 'Wait':
            await sleepFor(parseInt(splitCmd[1]), splitCmd[2]);
            return;

        case 'Repeat':
            if (splitCmd[2]) return makeRangeIterator(parseInt(splitCmd[1]));

        default:
            return;
    }
};

export const motionCommands = async (cmd) => {
    let splitCmd = cmd.split(' ');
    splitCmd = splitCmd.filter((cmdStr) => cmdStr.trim());

    const cat = document.querySelector('#movingCat');

    switch (splitCmd[0]) {
        case 'Move':
            moveCat(cat, parseInt(splitCmd[1]));
            return;

        case 'Turn':
            turnCat(cat, parseInt(splitCmd[2]), splitCmd[1]);
            return;

        default:
            return;
    }
};

export const looksCommands = async (cmd) => {
    let splitCmd = cmd.split(' ');

    splitCmd = splitCmd.filter((cmdStr) => cmdStr.trim());

    const toastConfig = {
        duration: parseInt(splitCmd[3]) * 1000,
        position: 'bottom-left',
        icon: '🐱'
    };

    switch (splitCmd[0]) {
        case 'Say':
            toast(splitCmd[1], toastConfig);
            return;

        case 'Think':
            toast('Thinking... ' + splitCmd[1], toastConfig);
            return;

        default:
            return;
    }
};

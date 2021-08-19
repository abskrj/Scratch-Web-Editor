import { makeRangeIterator, moveCat, sleepFor, turnCat } from './utility';

export const controlCommands = async (cmd) => {
    const splitCmd = cmd.split(' ');
    switch (splitCmd[0]) {
        case 'Wait':
            await sleepFor(parseInt(splitCmd[1]), splitCmd[2]);
            return;

        case 'Repeat':
            if (splitCmd[2]) return makeRangeIterator(parseInt(splitCmd[1]));
    }
};

export const motionCommands = async (cmd) => {
    const splitCmd = cmd.split(' ');

    const cat = document.querySelector('#movingCat');

    switch (splitCmd[0]) {
        case 'Move':
            moveCat(cat, parseInt(splitCmd[1]));
            return;

        case 'Turn':
            turnCat(cat, parseInt(splitCmd[2]), splitCmd[1]);
            return;
    }
};

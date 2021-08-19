import { toast } from 'react-hot-toast';
import { wlcmMsg1, wlcmMsg2, wlcmMsg3 } from './../constants/wlcmMsg';

export function* makeRangeIterator(times) {
    let iterationCount = 0;
    for (let i = 0; i < times; i++) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

export const sleep = (time) =>
    new Promise((resolve) => setTimeout(resolve, time));

export const sleepFor = async (time, unit) => {
    switch (unit) {
        case 'milisecond':
            await sleep(time);
            return;
        case 'second':
            await sleep(time * 1000);
            return;
        case 'minute':
            await sleep(time * 1000 * 60);
            return;
        default:
            await sleep(time * 1000);
            return;
    }
};

export const moveCat = (cat, steps) => {
    cat.style.transform += `translate(${steps * 10}px)`;
    // Object.assign(cat.style, moveStyle);
};

export const turnCat = (cat, degree, dir) => {
    dir = dir === 'CW' ? 1 : -1;
    cat.style.transform += `rotate(${dir * degree}deg)`;
};

export const isGeneratorFunc = (func) => {
    if (!func) return false;
    return func.constructor.name === makeRangeIterator.constructor.name;
};

export const showWelcome = () => {
    let count = 0;
    return function () {
        if (count++ > 0) return;
        toast.success(wlcmMsg1, { position: 'bottom-left' });
        toast.success(wlcmMsg2, { position: 'bottom-left' });
        toast.success(wlcmMsg3, { position: 'bottom-left' });
    };
};

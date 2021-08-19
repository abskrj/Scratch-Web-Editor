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

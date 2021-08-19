import React, { useEffect } from 'react';
import CatSprite from './CatSprite';
import { useSelector } from 'react-redux';
import mergeSprite from '../utils/mergeSprite';
import commandParser from '../utils/commandParser';
import toast from 'react-hot-toast';

export default function PreviewArea() {
    const commands = useSelector((state) => state.commands);

    const reset = () => {
        const cat = document.querySelector('#movingCat');
        cat.style = '';
        toast.success('Reset', { position: 'bottom-left' });
    };
    const execute = async (e) => {
        if (e.target.dataset.run) await commandParser(mergeSprite(commands));
        if (e.target.dataset.reset) reset();
    };

    return (
        <div
            onClick={execute}
            className="flex-none w-full h-full overflow-y-auto p-2"
        >
            <CatSprite id="movingCat" className="transition-all" />
            <button
                className="fixed right-5 bottom-5 bg-green-500 hover:bg-green-700 text-gray-50 rounded-full h-12 w-12"
                data-run
            >
                Run
            </button>
            <button
                className="fixed right-20 bottom-5 bg-red-500 hover:bg-red-700 text-gray-50 rounded-full h-12 w-12"
                data-reset
            >
                Reset
            </button>
        </div>
    );
}

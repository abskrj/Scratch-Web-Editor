import React, { useEffect } from 'react';
import CatSprite from './CatSprite';
import { useSelector } from 'react-redux';
import mergeSprite from '../utils/mergeSprite';
import commandParser from '../utils/commandParser';

export default function PreviewArea() {
    const commands = useSelector((state) => state.commands);

    useEffect(() => {
        const callParser = async () => {
            await commandParser(mergeSprite(commands));
        };
        callParser();
    }, [commands]);

    return (
        <div className="flex-none w-full h-full overflow-y-auto p-2">
            <CatSprite id="movingCat" className="transition-all" />
        </div>
    );
}

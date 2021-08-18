import React from 'react';
import blocks from '../constants/blocks';
import SidebarItem from './SidebarItem';
import { allowDrop, deleteDiv } from '../utils/dragNDrop';

export default function Sidebar() {
    return (
        <div
            onDrop={deleteDiv}
            onDragOver={allowDrop}
            className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"
        >
            {Object.keys(blocks).map((blockName) => (
                <SidebarItem
                    key={blockName}
                    title={blockName}
                    data={blocks[blockName]}
                />
            ))}
        </div>
    );
}

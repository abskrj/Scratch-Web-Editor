import React, { useState } from 'react';
import { allowDrop, drop } from '../utils/dragNDrop';

export default function MidArea() {
    const [tabs, setTabs] = useState(['S1']);
    const [currentTab, setCurrentTab] = useState('S1');

    const getName = (id) => {
        const integers = id.match(/(\d+)/);
        return 'Sprite ' + integers[0];
    };

    const switchTab = (id) => {
        setCurrentTab(id);
    };

    const removeTabs = (id) => {
        console.log('askgja');
        if (tabs.length === 1) return;
        const updatedTabs = tabs.filter((tab) => tab !== id);
        setTabs(updatedTabs);
    };

    const addTabs = () => {
        if (tabs.length > 6) return;
        setTabs([...tabs, `S${tabs.length + 1}`]);
        setCurrentTab(`S${tabs.length + 1}`);
    };

    return (
        <div className="flex-1 h-full">
            <div className="relative">
                <div className="w-full flex flex-no-wrap overflow-x-auto items-start scrolling-touch">
                    {tabs.map((tab) => (
                        <button
                            key={tab + 'btn'}
                            onClick={() => switchTab(tab)}
                            className={`${
                                tab === currentTab
                                    ? 'bg-green-600'
                                    : 'bg-blue-400 hover:bg-blue-700'
                            }  text-white font-bold py-2 px-4 rounded inline-flex items-center`}
                        >
                            {getName(tab)}
                        </button>
                    ))}
                </div>

                <button
                    onClick={addTabs}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded absolute bottom-0 right-2"
                >
                    +
                </button>
            </div>
            <p className="text-center bg-purple-100">
                Drop Here @ {getName(currentTab)}
            </p>

            {tabs.map((tab) => (
                <div
                    key={tab + 'div'}
                    onDrop={drop}
                    onDragOver={allowDrop}
                    className={`flex-1 h-full overflow-auto ${
                        tab === currentTab ? 'block' : 'hidden'
                    }`}
                />
            ))}
        </div>
    );
}

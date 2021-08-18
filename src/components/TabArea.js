import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { drag } from '../utils/dragNDrop';
import { switchTab, appendTab } from './../redux/action';

function TabArea() {
    const tabs = useSelector((state) => state.tabs);
    const currentTab = useSelector((state) => state.currentTab);
    const dispatch = useDispatch();

    const getName = (id) => {
        const integers = id.match(/(\d+)/);
        return 'Sprite ' + integers[0];
    };

    const toggleTab = (e) => {
        // setCurrentTab(id);
        dispatch(switchTab(e.target.dataset.tab));
    };

    const addTabs = () => {
        if (tabs.length > 6) return;
        dispatch(appendTab());
        // setTabs([...tabs, `S${tabs.length + 1}`]);
        // setCurrentTab(`S${tabs.length + 1}`);
    };
    return (
        <>
            <div className="relative">
                <div
                    onClick={toggleTab}
                    onDragStart={drag}
                    className="w-full flex flex-no-wrap overflow-x-auto items-start scrolling-touch"
                >
                    {tabs.map((tab) => (
                        <button
                            draggable
                            id={'sprite-' + tab}
                            key={tab + 'btn'}
                            className={`${
                                tab === currentTab
                                    ? 'bg-green-600'
                                    : 'bg-blue-400 hover:bg-blue-700'
                            }  text-white font-bold py-2 px-4 rounded inline-flex items-center`}
                            data-tab={tab}
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
        </>
    );
}

export default TabArea;

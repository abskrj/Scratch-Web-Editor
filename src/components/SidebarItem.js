import React from 'react';
import { drag } from '../utils/dragNDrop';
import getBlockColor from '../utils/getBlockColor';
import Icon from './Icon';

const SidebarItem = ({ title, data }) => {
    const getTextIcon = (data, loc) => {
        const hasIcon = data?.icon;
        const text = hasIcon ? data?.text?.split('#icon') : data?.text;

        if (loc === 0) {
            return hasIcon ? text[0] : text;
        } else if (loc === 1) {
            return hasIcon ? data?.icon : null;
        } else {
            return hasIcon ? text[1] : '';
        }
    };

    return (
        <>
            <div className="font-bold"> {title} </div>

            {data.map((_d, i) => (
                <div
                    draggable
                    onDragStart={drag}
                    id={title + i}
                    key={title + i}
                    className={`flex flex-row flex-wrap bg-${getBlockColor(
                        title
                    )}-500 text-white px-2 py-1 my-2 text-sm cursor-pointer`}
                >
                    {getTextIcon(_d, 0)}
                    {getTextIcon(_d, 1) ? (
                        <Icon
                            name={getTextIcon(_d, 1)}
                            size={15}
                            className="text-green-600 mx-2"
                        />
                    ) : (
                        ''
                    )}
                    {getTextIcon(_d, 2)}
                </div>
            ))}
        </>
    );
};

export default SidebarItem;

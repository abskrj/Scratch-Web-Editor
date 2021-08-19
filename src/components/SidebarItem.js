import React from 'react';
import { drag } from '../utils/dragNDrop';
import getBlockColor from '../utils/getBlockColor';
import Icon from './Icon';
import { getTextIcon } from './../utils/stringFormatter';
import BlockWrapper from './BlockWrapper';
import PropTypes from 'prop-types';

const SidebarItem = ({ title, data }) => {
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
                    <BlockWrapper text={getTextIcon(_d, 0)} />
                    {getTextIcon(_d, 1) && (
                        <Icon
                            name={getTextIcon(_d, 1)}
                            size={15}
                            className="text-green-600 mx-2"
                        />
                    )}
                    <BlockWrapper text={getTextIcon(_d, 2)} />
                </div>
            ))}
        </>
    );
};

SidebarItem.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

export default SidebarItem;

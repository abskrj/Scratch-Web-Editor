import actionTypes from './actionTypes';

export const appendTab = () => ({
    type: actionTypes.ADD_TAB
});

export const removeTab = (tabId) => ({
    type: actionTypes.REMOVE_TAB,
    payload: tabId
});

export const switchTab = (tabId) => ({
    type: actionTypes.SWITCH_TAB,
    payload: tabId
});

export const addCommand = (sprite, cmdID, cmdText) => ({
    type: actionTypes.ADD_CMD,
    payload: { sprite, cmd: { cmdID, cmdText } }
});

export const removeCommand = (sprite, cmdId) => ({
    type: actionTypes.REMOVE_CMD,
    payload: { sprite, cmdId }
});

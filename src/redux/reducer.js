import actionTypes from './actionTypes';
import { toast } from 'react-hot-toast';

const INITIAL_STATE = {
    tabCount: 1,
    tabs: ['S1'],
    currentTab: 'S1',
    commands: {}
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TAB:
            return {
                ...state,
                tabs: [...state.tabs, `S${state.tabCount + 1}`],
                currentTab: `S${state.tabCount + 1}`,
                tabCount: state.tabCount + 1
            };
        case actionTypes.REMOVE_TAB:
            if (action.payload === 'S1') {
                toast.error(`Sprint 1 can't be removed`, {
                    position: 'bottom-left'
                });
                return state;
            }

            // Filter tab from tabs array
            const filteredTab = state.tabs.filter(
                (tabId) => tabId !== action.payload
            );

            // Check if currentTab is removed or not
            let currTabIndex = filteredTab.indexOf(state.currentTab);

            // If current is removed, make the previous one current
            if (currTabIndex === -1) {
                currTabIndex = filteredTab.length - 1;
            }

            // Delete sprint from command too

            const cmds = state.commands;

            if (state.commands[action.payload]) {
                delete cmds[action.payload];
            }

            return {
                ...state,
                tabs: [...filteredTab],
                currentTab: filteredTab[currTabIndex],
                commands: { ...cmds }
            };

        case actionTypes.SWITCH_TAB:
            return {
                ...state,
                currentTab: action.payload
            };

        case actionTypes.ADD_CMD:
            const sprite = action.payload.sprite;
            const cmd = action.payload.cmd;

            if (!state.commands[sprite]) state.commands[sprite] = [];
            const newSpriteCmds = state.commands[sprite];
            newSpriteCmds.push(cmd);

            return {
                ...state,
                commands: {
                    ...state.commands,
                    [sprite]: [...newSpriteCmds]
                }
            };

        case actionTypes.REMOVE_CMD:
            return {
                ...state,
                commands: {
                    ...commands,
                    [action.payload.sprite]: action.payload.cmd
                }
            };

        default:
            return state;
    }
};

export default reducer;

import {
    controlCommands,
    motionCommands,
    looksCommands
} from './commandMapping';
import { isGeneratorFunc } from './utility';

const commandParser = async (commands) => {
    let toRepeat = false;
    let itr;
    const cmdToRepeat = [];
    for (const cmd of commands) {
        const resp = await commandRunner(cmd);
    }
};

const commandRepeater = async (commands, gen) => {
    console.log(commands);
    while (gen.next()) {
        await commandParser(commands);
    }
};

const commandRunner = async (cmd) => {
    if (cmd.cmdID.includes('Control')) return controlCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Events')) return motionCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Looks')) return looksCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Motion')) return motionCommands(cmd.cmdText);
};

export default commandParser;

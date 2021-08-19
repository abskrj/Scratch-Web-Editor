import { controlCommands, motionCommands } from './commandMapping';

const commandParser = async (commands) => {
    for (const cmd of commands) {
        await commandRunner(cmd);
    }
};

const commandRunner = async (cmd) => {
    if (cmd.cmdID.includes('Control')) return controlCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Events')) return motionCommands(cmd.cmdText);
    if (cmd.cmdID.includes('Looks')) console.log('c');
    if (cmd.cmdID.includes('Motion')) return motionCommands(cmd.cmdText);
};

export default commandParser;

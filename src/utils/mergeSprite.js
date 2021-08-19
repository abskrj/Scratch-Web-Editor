const mergeSprite = (commands) => {
    const results = [];
    for (const sprite in commands) {
        results.push(...commands[sprite]);
    }
    return results;
};

export default mergeSprite;

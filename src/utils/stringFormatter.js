export const getTextIcon = (data, loc) => {
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

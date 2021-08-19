import React from 'react';
import PropTypes from 'prop-types';

function BlockWrapper({ text }) {
    if (text.includes('$')) {
        const splittedText = text.split('$');
        const toHide = splittedText.pop();
        const JSXText = (
            <>
                {splittedText.join('')}
                <span className="hidden">{toHide}</span>
            </>
        );
        return JSXText;
    }
    return text;
}

BlockWrapper.propTypes = {
    text: PropTypes.string
};

export default BlockWrapper;

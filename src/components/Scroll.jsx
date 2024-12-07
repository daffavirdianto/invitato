import React from 'react';

const ScrollIndicator = ({ onClick }) => {
    return (
        <div className="scroll-indicator" onClick={onClick}>
            <div className="scroll-arrow"></div>
        </div>
    );
};

export default ScrollIndicator;
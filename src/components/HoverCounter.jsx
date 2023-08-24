import React from 'react';

const HoverCounter = ({count, countHandler}) => {
    const style = {
        fontSize: 40,
        textAlign: 'Center',
        padding: 10,
        margin: 20,
        width: 300,
        backgroundColor: 'gray'
    }
    return (
        <div>
            <h1 onMouseOver={countHandler} style={style}>Hover: {count}</h1>
        </div>
    );
};

export default HoverCounter;
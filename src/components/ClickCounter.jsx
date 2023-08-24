import React from 'react';

const ClickCounter = ({count, countHandler}) => {
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
            <input type="button" style={style} value={count} onClick={countHandler}/>
        </div>
    );
};

export default ClickCounter;
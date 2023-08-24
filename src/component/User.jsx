import React, { useContext } from 'react';
import UserContext from './CustomContext';
const User = () => {
    const userInfo = useContext(UserContext);

    return (
        <div>
            
                <h1>Hell, {userInfo.uname}</h1>
            
        </div>
    );
};

export default User;
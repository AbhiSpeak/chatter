import React, { useState } from "react";

const Register = () => {
    const[ username, setUsername ] = useState('');
    const[ password, setPassword ] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="bg-black h-screen flex items-center">
            <form className="w-64 mx-auto">
                <input 
                    value={username} 
                    onChange={handleUsername} 
                    type="text" 
                    placeholder="username" 
                    className="block w-full rounded-sm p-2 mb-2 border"
                />
                
                <input 
                    value={password} 
                    onChange={handlePassword} 
                    type="password" 
                    placeholder="password" 
                    className="block w-full rounded-sm p-2 mb-2 border"
                />
                
                <button 
                    className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register
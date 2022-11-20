import React from 'react';
import "./app.css"
import LoginPage from './loginContainer/LoginPage';

const App = () => {
    return (
        <>
            <div id='container' className='innerContainer'>
                <LoginPage />
            </div>
        </>
    );
}

export default App;

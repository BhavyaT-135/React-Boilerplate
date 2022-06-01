import React from 'react';
import ThemeContextProvider from './Contexts/ThemeContext';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AuthContextProvider from './Contexts/AuthContext';

function App() {
    return (
        <div className='App'>
            <div className='ui raised very padded text container segment'>
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <Navbar />
                        <TodoList />
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        </div>
    );
}

export default App;

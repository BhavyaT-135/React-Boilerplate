import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

/*class TodoList extends React.Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
        const theme = isDarkTheme ? darkTheme : lightTheme;
        return (
            <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
                <p className='item'>Plan the family trip</p>
                <p className='item'>Go for shopping for dinner</p>
                <p className='item'>Go for a walk</p>
                <button className='ui button violet' onClick={changeTheme}>Change The Theme</button>
            </div>
        )
    }
}*/

const TodoList = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return (
        <div style={{ background: theme.background, color: theme.text, height: '140px', textAlign: 'center' }}>
            <p className='item'>Plan the family trip</p>
            <p className='item'>Go for shopping for dinner</p>
            <p className='item'>Go for a walk</p>
            <button className='ui button violet' onClick={changeTheme}>Change The Theme</button>
        </div>
    );
}

export default TodoList;
import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/pic1.jpg';
import profile2 from './image/pic2.jpg';
import profile3 from './image/pic3.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = function () {

    return (
        <div className='ui comments'>
            <UserCard profile='Alex Gustafson'>
                <SingleComment
                    name='Alex'
                    date='Today at 5:00PM'
                    text='It is amazing.'
                    picture={profile1} />
            </UserCard>
            <UserCard profile='Jack McMissile'>
                <SingleComment
                    name='Jack'
                    date='Yesterday at 9:00AM'
                    text='Great job'
                    picture={profile2} />
            </UserCard>
            <UserCard profile='Sarah Shelby'>
                <SingleComment
                    name='Sarah'
                    date='Today at 7:00PM'
                    text='Thanks...'
                    picture={profile3} />
            </UserCard>


        </div >    //JSX looks like HTML but its not.
    )
}

//Babeljs.io converts JSX to Java Script ES 5.

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
)

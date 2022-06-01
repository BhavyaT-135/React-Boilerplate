import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'

const Contact = (props) => {

    /*setTimeout(() => {
        props.history.push('/about')
    }, 2000)*/

    return (
        <div>
            <Modal />
            <div
                className='ui raised very padded text container segment'
                style={{ marginTop: '80px' }}
            >
                <Link to='/card/Bhavya' className='ui header'>Bhavya</Link>
                <p>My name is Bhavya Tewari and I'm happy to be a part of the Bhavyas.</p>
            </div>
        </div>
    )
}

export default Contact;
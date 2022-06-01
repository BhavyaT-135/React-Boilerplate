import React from 'react';
import northernPic from './image/Northern.jpg';
import southernPic from './image/Southern.jpg';
import './Hemisphere.css';

const hemisphereConfig = {
    Northern: {
        text: 'It is the Northern Hemisphere!',
        picture: northernPic
    },
    Southern: {
        text: 'It is the Southern Hemisphere!',
        picture: southernPic
    }
}

const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern'
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} alt="Hemisphere" width='400' />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )

}

export default HemisphereDisplay;
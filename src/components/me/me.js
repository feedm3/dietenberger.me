import React from 'react';
import Avatar from 'material-ui/Avatar';
import Portrait from '../../assets/portrait_360.jpg';

// eslint-disable-next-line
import meStyles from './me.css'

const Me = () => (
    <div className="me">
        <Avatar
            src={ Portrait }
            className='me-avatar'/>
    </div>
);

export default Me;

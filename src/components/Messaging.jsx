import React, { useState, useEffect } from 'react';
import '../css/messaging.css';
//icons
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

import Chat from './Chat';

import { Link } from 'react-router-dom';

const Messaging = () => {
  const [messaging, setMessaging] = useState(false);
  const [Profiles, setProfiles] = useState([]);
  console.log(Profiles);
  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/profile/', {
      method: 'GET',
      headers: {
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3NmU1ZmMxOTMwNTAwMTU4NzE1MzIiLCJpYXQiOjE2MjM2ODI2NTUsImV4cCI6MTYyNDg5MjI1NX0.yfDyxz2SFLNJcumUS_JTMQcHGLFbh-etvTpyGhRMT6g',
      },
    })
      .then((response) => response.json())
      .then((data) => setProfiles(data.slice(22, 33)));
  }, []);
  return (
    <div
      className='Messaging'
      style={
        messaging
          ? { transform: 'translateY(0)' }
          : { transform: 'translateY(90%)' }
      }
    >
      <div className='header_messaging'>
        <div className='messaging_head'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E35AQEIVkoUWgLFvw/profile-framedphoto-shrink_100_100/0/1597096649541?e=1623816000&v=beta&t=kPWuy6CfRj_9ky14jRJtuusU_JzsQZV5E9hPwemwXa0'
            alt=''
          />
          <h5>Messaging</h5>
        </div>
        <div className='icons'>
          <div className='icon'>
            <EditOutlinedIcon />
          </div>
          <div className='icon'>
            <MoreHorizOutlinedIcon />
          </div>
          <div className='icon' onClick={() => setMessaging(!messaging)}>
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
      </div>
      <hr />
      <div className='messagin_body'>
        <input type='text' placeholder='Search messages' />
        {Profiles.slice(0, 5).map((p) => (
          <Link to={'/profile/' + p.name + '/' + p._id}>
            <Chat p={p} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Messaging;

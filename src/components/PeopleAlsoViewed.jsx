import React, { useEffect, useState } from 'react';
import '../css/PeopleAlsoViewed.css';
import { Link } from 'react-router-dom'
const PeopleAlsoViewed = () => {
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
      .then((data) => setProfiles(data.slice(0, 11)));
  }, []);
  return (
    <div className='people_also_viewed'>
      <p style={{fontSize:'1.5em', fontWeight:'500'}}>People also viewed</p>
      {Profiles.slice(3, 10).map((p) => (
        <div className='profils_container' key={p._id}>
          <img src={p.image} alt={p.name + ' ' + p.surname} />
          <div className='profile_info'>
            <Link>
                <div className='name'>{p.name + ' ' + p.surname}</div>
                <div className='speciality text-muted' style={{fontSize:'0.8em'}}>{p.title}</div>
            </Link>
            <button className='connect_button px-2 py-0 mt-1'>Connect</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleAlsoViewed;

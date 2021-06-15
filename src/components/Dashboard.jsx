import React from 'react';
import '../css/Dashboard.css';
//icons
import SettingsInputAntennaOutlinedIcon from '@material-ui/icons/SettingsInputAntennaOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='primary_title'>Your Dashboard</div>
      <div className='secondary_title'>Private to you</div>
      <div className='dashboard_info_container'>
        <div className='dashboard_info' id='dashboard_info_left'>
          <a href='z'>
            <div className='number'>60</div>
            <div className='property'>Who viewed your profile</div>
          </a>
        </div>
        <div className='dashboard_info'>
          <a href='z'>
            <div className='number'>90</div>
            <div className='property'>Article views</div>
          </a>
        </div>
        <div className='dashboard_info' id='dashboard_info_right'>
          <a href='z'>
            <div className='number'>78</div>
            <div className='property'>Search appearance</div>
          </a>
        </div>
      </div>
      <div className='dashboard_management_container'>
        <div className='dashboard_management'>
          <div className='icon'>
            <SettingsInputAntennaOutlinedIcon fontSize='large' />
          </div>
          <div>
            <div className='dashboard_management_title'>
              Creator mode : <span style={{ color: 'gray' }}>Off</span>
            </div>
            <div className='dashboard_management_discription'>
              Grow your audience and get discovered by highlighting content on
              your profile.
            </div>
          </div>
          <div className='border_bottom'></div>
        </div>
        <div className='dashboard_management'>
          <div className='icon'>
            <PeopleAltIcon fontSize='large' />
          </div>
          <div>
            <div className='dashboard_management_title'>My Network</div>
            <div className='dashboard_management_discription'>
              Manage your connections, events, and interests.
            </div>
          </div>
          <div className='border_bottom'></div>
        </div>
        <div className='dashboard_management'>
          <div className='icon'>
            <BookmarkIcon fontSize='large' />
          </div>
          <div>
            <div className='dashboard_management_title'>My items</div>
            <div className='dashboard_management_discription'>
              Keep track of your jobs, courses and articles.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

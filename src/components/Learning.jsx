import React from 'react';
import '../css/Learning.css';
const Learning = () => {
  return (
    <div className='learning'>
      <div className='learning_title'>
        <img
          src='https://lh3.googleusercontent.com/proxy/kK3IhM5qUjcBM297jeE4f4kfPnBPGYpvVswbDDQQTcZm8quguivl2vGXzTS0HOwWPsrLFNzuftscVi26d1VeO0HrFqsqLPiGZVxr2gLqhVRerQrEPxrWMVM5VwfYfdc-lpQ'
          alt=''
        />
        <div>Learning</div>
      </div>
      <div className='add_skills'>
        Add new skills with these courses, free for 24 hours
      </div>
      <div className='videos_container'>
        <div className='video'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0DAQEYWX58tVMaQw/learning-public-crop_60_100/0/1576687713263?e=1623801600&v=beta&t=hw8smMEWWxnVWBeGPQPMUp4hikk9hYW877-ZhbeU13Q'
            alt=''
          />
        </div>
        <div className='video_info'>
          <div className='video_title'>Diversity, Inclusion, and Belonging</div>
          <div className='video_views'>555,775 viewers</div>
        </div>
      </div>
      <div className='videos_container'>
        <div className='video'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0DAQHOl-2agpS1Gg/learning-public-crop_60_100/0/1605821728995?e=1623801600&v=beta&t=4OWXAhdgLgwYrMdEJ__x3xVkMeryBvkpT4IJFS4OtXU'
            alt=''
          />
        </div>
        <div className='video_info'>
          <div className='video_title'>
            Speaking Confidently and Effectively
          </div>
          <div className='video_views'>416,240 viewers</div>
        </div>
      </div>
      <div className='videos_container'>
        <div className='video'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C4E0DAQFEb874xjb6Vw/learning-public-crop_60_100/0/1567794466961?e=1623801600&v=beta&t=qEBYrL97MrAeRgfcwE1ukeeOySe9k-YOjRrFOvW9hnI'
            alt=''
          />
        </div>
        <div className='video_info'>
          <div className='video_title'>Agile Foundations</div>
          <div className='video_views'>555,775 viewers</div>
        </div>
      </div>
      <div className='show_more'>Show more on LinkedIn Learning</div>
    </div>
  );
};

export default Learning;

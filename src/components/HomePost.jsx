import { Card, Button, Form, FormControl, Container } from 'react-bootstrap';
import '../css/HomePost.css';

import { Component } from 'react';
// const postApi = fetch('https://striveschool-api.herokuapp.com/api/posts/',{
// method:'Post',)}
class NewsFeed extends Component {
  state = {
    addPost: {
      text: '',
    },
  };
  _addPOST = async (e) => {
    //console.log(e.key);
    if (e.key === 'Enter') {
      e.preventDefault();
      const url = 'https://striveschool-api.herokuapp.com/api/posts/';
      const key =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(this.state.addPost),
          headers: {
            Authorization: key,
            'Content-Type': 'application/json',
          },
        });
        const post = await response.json();
        if (response.ok) {
          alert('posted');
          //console.log('post', post);
          this.props.newPost(post);
          this.setState({
            addPost: {
              text: '',
            },
          });
        } else {
          console.log('error');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  render() {
    return (
      <Card className='p-0'>
        <Card.Body className='pt-2 px-2'>
          <Form className='d-flex'>
            <img src={this.props.profilePic} alt='profilePic' id='imgAvatar' />
            <FormControl
              type='search'
              placeholder='Start a post'
              className='mr-2'
              aria-label='Search'
              id='postText'
              value={this.state.addPost.text}
              onKeyDown={(e) => this._addPOST(e)}
              onChange={(e) =>
                this.setState({
                  addPost: {
                    text: e.target.value,
                  },
                })
              }
            />
          </Form>
          <Container className='p-0'>
            <div className='d-flex newspostbtn justify-content-center'>
              <Button
                variant=''
                id='photo'
                className='d-block d-lg-flex flex-row pl-0 pt-0 pb-3'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-image'
                  viewBox='0 0 16 16'
                >
                  <path d='M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
                  <path d='M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z' />
                </svg>
                <span>Photo</span>
              </Button>

              <Button
                variant=''
                id='video'
                className='d-block d-lg-flex flex-row pl-1 pt-0 pb-3'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-play-btn-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z' />
                </svg>
                <span>Video</span>
              </Button>

              <Button
                variant=''
                id='event'
                className='d-block d-lg-flex flex-row pl-1 pt-0 pb-3'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-calendar2-event'
                  viewBox='0 0 16 16'
                >
                  <path d='M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z' />
                  <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z' />
                  <path d='M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z' />
                </svg>
                <span>Event</span>
              </Button>

              <Button
                variant=''
                id='article'
                className='d-block d-lg-flex flex-row pl-1 pt-0 pb-3'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-layout-text-sidebar-reverse'
                  viewBox='0 0 16 16'
                >
                  <path d='M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z' />
                  <path d='M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z' />
                </svg>
                <span>Write article</span>
              </Button>
            </div>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}

export default NewsFeed;

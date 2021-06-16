import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Col, Button } from 'react-bootstrap';
import '../css/EditProfile.css';

class EditProfile extends Component {
  state = {
    edit: {
      name: this.props.profileData.name,
      surname: this.props.profileData.surname,
      email: this.props.profileData.email,
      username: this.props.profileData.username,
      title: this.props.profileData.title,
      bio: this.props.profileData.bio,
      area: this.props.profileData.area,
      image: this.props.profileData.image,
    },
  };

  componentDidMount = () => {
    console.log(this.state.edit);
  };

  handleChange = (e) => {
    let id = e.currentTarget.id;
    let info = { ...this.state.edit };
    info[id] = e.currentTarget.value;
    this.setState({ edit: info });
  };

  editInfo = async () => {
    const url = 'https://striveschool-api.herokuapp.com/api/profile/';
    const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(this.state.edit),
        headers: {
          Authorization: key,
          'Content-type': 'application/json',
        },
      });
      const editedInfo = await response.json();
      if (response.ok) {
        this.props.editInfo(editedInfo);
        alert('edit done');
        this.setState({
          ...this.state.edit,
        });
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form>
        <Form.Group className='d-flex'>
          <Col>
            <Form.Label className='text-muted'>First Name *</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              value={this.state.edit.name}
              id='name'
              className='name'
              type='text'
            />
          </Col>

          <Col>
            <Form.Label className='text-muted'>Last Name *</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              value={this.state.edit.surname}
              id='surname'
              className='surname'
              type='text'
            />
          </Col>
        </Form.Group>

        <Col>
          <Link className=''>Add former name</Link>
        </Col>

        <Col>
          <Form.Group className='mt-4'>
            <Form.Label className='text-muted'>Email *</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              value={this.state.edit.email}
              id='email'
              className='surname'
              type='email'
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label className='text-muted'>Image</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              value={this.state.edit.image}
              id='image'
              className='surname'
              type='text'
            />
          </Form.Group>
        </Col>

        <Col>
          <Link className=''>Add new position</Link>
        </Col>

        <Col className='mt-4'>
          <Form.Group>
            <Form.Check
              type='checkbox'
              className='text-muted'
              label='Show current company in my intro'
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label className='text-muted'>Education *</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              value={this.state.edit.title}
              id='title'
              className='name'
              type='text'
            />
          </Form.Group>
        </Col>

        <Col>
          <Link className=''>Add new education</Link>
        </Col>

        <Col className='mt-4'>
          <Form.Group>
            <Form.Check
              type='checkbox'
              className='text-muted'
              label='Show education in my intro'
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Label className='text-muted'>Country/Region *</Form.Label>
          <Form.Control
            onChange={(e) => this.handleChange(e)}
            value={this.state.edit.area}
            id='area'
            className='name'
            type='text'
          />
        </Col>

        <Form.Group className='d-flex mt-3'>
          <Col md={4}>
            <Form.Label className='text-muted'>Username *</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              value={this.state.edit.username}
              id='username'
              className='name'
              type='text'
            />
          </Col>

          <Col md={8}>
            <Form.Label className='text-muted'>Postal Code</Form.Label>
            <Form.Control as='select'>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Col>
          <Form.Group>
            <Form.Label className='text-muted'>Bio *</Form.Label>
            <Form.Control
              onChange={(e) => this.handleChange(e)}
              value={this.state.edit.bio}
              id='bio'
              as='textarea'
              rows={2}
            />
          </Form.Group>
        </Col>
        <div className='text-right'>
          <Button
            className='badge-pill savebtn'
            onClick={(e) => this.editInfo(e)}
            variant='primary'
          >
            <strong>Save</strong>
          </Button>
        </div>
      </Form>
    );
  }
}

export default EditProfile;

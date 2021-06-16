import { Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className='container margin'>
      <Row>
        <Col>
          <img
            src='./assets/img/linkedin_logo.jpg'
            alt='logo'
            style={{ width: 140, height: 30 }}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <div>
            <Link to=''>About</Link>
          </div>
          <div>
            <Link to=''>Community Guidelines</Link>
          </div>
          <div>
            <Link to=''>Privacy &amp Terms</Link>
          </div>
          <div>
            <Link to=''>Sales Solution</Link>
          </div>
          <div>
            <Link to=''>Safety Center</Link>
          </div>
          <div></div>
        </Col>
        <Col sm={2}>
          <div>
            <Link to=''>Accessibility</Link>
          </div>
          <div>
            <Link to=''>Careers</Link>
          </div>
          <div>
            <Link to=''>Ad Choices</Link>
          </div>
          <div>
            <Link to=''>Mobile</Link>
          </div>
        </Col>

        <Col sm={2}>
          <div>
            <Link to=''>Talent Solution</Link>
          </div>
          <div>
            <Link to=''>Marketing Solution</Link>
          </div>
          <div>
            <Link to=''>Advertising</Link>
          </div>
          <div>
            <Link to="">Small Bussiness</Link>
          </div>
        </Col>
        <Col sm={1} className='footerIcon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-question-circle-fill'
            viewBox='0 0 16 16'
          >
            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z' />
          </svg>
          <svg
            className='footerIcon2 bi bi-gear-fill mt-5'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z' />
          </svg>
        </Col>
        <Col sm={3}>
          <h6 className=''>Questions?</h6>
          <div>
            <p>Visit our Help Center</p>
          </div>

          <h6 className='d-inline-block d-flex'>
            Manage your account and privacy
          </h6>
          <p>Go to your Settings.</p>
        </Col>
        <Col sm={2} className='last-col'>
          <p>Select Language</p>
          <Dropdown className='language'>
            <Dropdown.Toggle variant='..' id='dropdown-basic'>
              English(English)
            </Dropdown.Toggle>

            <Dropdown.Menu className='options'>
              <Dropdown.Item href='#/action-1'>Italiano(Italian)</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Deutsch(German)</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>
                Nerderlands(Dutch)
              </Dropdown.Item>
              <Dropdown.Item href='#/action-4'>English(English)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p className='copyRight'> Linkedin Corporation &copy; 2021</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

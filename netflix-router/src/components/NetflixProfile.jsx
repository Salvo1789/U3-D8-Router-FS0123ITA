import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles.css";
import netflix_logo from "../netflix_logo.png";
import avatar from "../avatar.png";
import { Container, Row, Col, Button, Dropdown, ButtonGroup, Form } from "react-bootstrap";

const NetflixProfile = () => (
  <Container className="container-fluid w-50 pt-5">
    <a className="position-absolute top-0 left-0 ps-2 pt-2" href="./index.html">
      <img src={netflix_logo} alt="Netflix" width="95" height="50" />
    </a>
    <h1 className="font-monospace border-bottom-1 text-light mt-5">Edit Profile</h1>

    <hr className="hr text-light w-75"></hr>

    <Row className="g-1">
      <div className="col-lg-3 col-md-12">
        <img src={avatar} className="img-fluid" width="160" height="160" />
      </div>

      <Col lg={6} md={6}>
        <div>
          <input
            className="bg-secondary text-light w-100 h-25 pb-2 mb-5"
            label="Name"
          />
        </div>

        <div>
          <h4 className="text-secondary">Lingua:</h4>
          <ButtonGroup className="btn-group w-25">
            <Button
              className="btn btn-outline-light dropdown-toggle rounded-0 mb-2"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Italiano
            </Button>
            <Dropdown.Menu className="bg-dark opacity 0.25">
              <Dropdown.Item className="text-light" href="#">
                Francese
              </Dropdown.Item>
              <Dropdown.Item className="text-light" href="#">
                Inglese
              </Dropdown.Item>
              <Dropdown.Item className="text-light active" href="#">
                Italiano
              </Dropdown.Item>
              <Dropdown.Item className="text-light" href="#">
                Portoghese
              </Dropdown.Item>
              <Dropdown.Item className="text-light" href="#">
                Spagnolo
              </Dropdown.Item>
              <Dropdown.Item className="text-light" href="#">
                tedesco
              </Dropdown.Item>
            </Dropdown.Menu>
          </ButtonGroup>
        </div>

        <hr className="text-light"></hr>

        <div>
            <h4 className="text-secondary py-2">Maturity Settings:</h4>
            <button type="button" className="btn btn-secondary py-2 rounded-1">ALL MATURITY RATINGS</button>
            <p className="text-light pt-2">Show titles of <span>all maturity ratings</span> for this profile</p>
            <button type="button" className="btn btn-outline-secondary py-1 px-4 my-3 rounded-0">EDIT</button>
        </div>

        <hr className="text-light"></hr>

        <div>
            <h4 className="text-secondary py-1">Autoplay controls</h4>

            <Form.Check>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label text-light" htmlFor="flexCheckDefault">
                Autoplay next episode in a series on all devices.
              </label>
            </Form.Check>
            <Form.Check>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
              <label className="form-check-label text-light" htmlFor="flexCheckChecked">
                Autoplay previews while browsing on all devices.
              </label>
            </Form.Check>
          </div>
      </Col>

      <Row className="w-75">
        <Col lg={3}>
          <button type="button" className="btn btn-outline-light py-2  my-3 rounded-0 fs-5 w-100">SAVE</button>
        </Col>
        <Col lg={3}>
          <button type="button" className="btn btn-outline-light py-2  my-3 rounded-0 fs-5 w-100">CANCEL</button>
        </Col>
        <Col lg={6}>
          <button type="button" className="btn btn-outline-light py-2  my-3 rounded-0 fs-5 w-100">DELETE PROFILE</button>
        </Col>
      </Row>

    </Row>
  </Container>
);

export default NetflixProfile;
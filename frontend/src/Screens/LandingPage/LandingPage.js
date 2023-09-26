import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intor-text">
            <div>
              <h1 className="title">Welcom to Note App</h1>
              <p className="sub-title">One safe place for all your notes.</p>
              <div className="buttonContainer">
                <a href="login">
                  <Button size="lg" className="landingButton">
                    Login
                  </Button>
                </a>
                <a href="register">
                  <Button
                    size="lg"
                    className="landingButton"
                    variant="outline-primary"
                  >
                    Sign Up
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

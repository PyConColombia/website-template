import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Image from 'next/image';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={11}>
              <div className="title-container">
                <h2 className="title">
                  <span className="bold">Del 7 al 9 de Junio |</span>
                  <span> Medellín - Colombia</span>
                </h2>
                <Image
                  src="/images/pycon-logo.svg"
                  alt="PyCon Colombia logo"
                  width={300}
                  height={300}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={9}>
              <Row>
                <Col xs={12}>
                  <div className="description">
                    <span>Ready to journey back in time</span>
                    <br />
                    <span className="bold">while building the future?</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  {/* <div className="button-container">
                    <Button className="btn btn-primary btn-welcome">Get your tickets</Button>
                  </div> */}
                </Col>
                <Col xs={12} md={4}></Col>
                <Col xs={12} md={4}>
                  <div className="icons-container"></div>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={2}></Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Welcome;

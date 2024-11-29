import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Enterprise = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Enterprise Solutions</h2>
          <p>Tailored solutions for large organizations.</p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Enterprise;

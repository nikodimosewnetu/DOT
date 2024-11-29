import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Home</Card.Title>
          <Card.Text>
            Your one-stop solution for all your needs.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;

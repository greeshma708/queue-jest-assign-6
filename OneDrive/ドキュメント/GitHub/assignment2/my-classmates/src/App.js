
import React from 'react';
import PersonCard from './PersonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  const people = [
    { name: 'John', favoriteColor: 'Blue', favoriteFood: 'Pizza' },
    { name: 'Smith', favoriteColor: 'Green', favoriteFood: 'Sushi' },
    { name: 'preethi', favoriteColor: 'Red', favoriteFood: 'Pasta' },
  ];

  return (
    <Container className="container">
      <h1>My Classmates</h1>
      <Row>
        {people.map((person, index) => (
          <PersonCard
            key={index}
            name={person.name}
            favoriteColor={person.favoriteColor}
            favoriteFood={person.favoriteFood}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
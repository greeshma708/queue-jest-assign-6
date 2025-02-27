import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PersonCard({ name, favoriteColor, favoriteFood }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Card className="card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Favorite Color: {favoriteColor} <br />
          Favorite Food: {favoriteFood} <br />
          Likes: {likes}
        </Card.Text>
        <Button className="btn-primary" onClick={handleLike}>Like</Button>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
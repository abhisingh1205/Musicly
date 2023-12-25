import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ArtistCard({ artist }) {
  console.log(artist.image);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`http://localhost:8000${artist.image}`}
          alt={artist.artist_name}
          fluid
        />
        <Card.Body>
          <Card.Title>{artist.artist_name}</Card.Title>
          <Card.Text>{artist.bio} </Card.Text>
          <Card.Text><p>Genre: {artist.genre}</p> </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ArtistCard;

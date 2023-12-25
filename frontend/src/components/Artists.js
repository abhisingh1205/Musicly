import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtistCard from "./ArtistCard";

function Artists() {
  const [artists, setArtists] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/artists/");
        setArtists(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        { error }
      ) : (
        <div>
          {artists.map(artist => <ArtistCard key={artist.id} artist={artist}/>)}
        </div>
      )}
    </div>
  );
}

export default Artists;

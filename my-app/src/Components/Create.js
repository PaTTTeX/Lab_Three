import { useState } from "react";
import axios from 'axios';

function Create() {
  // State to store the movie title, year, and poster URL
  const [title, setTitle] = useState('');   // Movie title state
  const [year, setYear] = useState('');     // Movie year state
  const [poster, setPoster] = useState(''); // Movie poster URL state

// create.js
const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    
    const movie = {
      title: title,
      year: year,
      poster: poster
    };
    
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <h2>This is my Create Component.</h2>
      
      {/* Form for adding movie details */}
      <form onSubmit={handleSubmit}>
        
        {/* Input for Movie Title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title} // Bind the input to the title state
            onChange={(e) => { setTitle(e.target.value) }} // Update title state on change
          />
        </div>
        
        {/* Input for Movie Year */}
        <div className="form-group">
          <label>Movie Year: </label>
          <input type="number"
            className="form-control"
            value={year} // Bind the input to the year state
            onChange={(e) => { setYear(e.target.value) }} // Update year state on change
          />
        </div>
        
        {/* Input for Movie Poster URL */}
        <div className="form-group">
          <label>Movie Poster URL: </label>
          <input type="text"
            className="form-control"
            value={poster} // Bind the input to the poster state
            onChange={(e) => { setPoster(e.target.value) }} // Update poster state on change
          />
        </div>
        
        {/* Submit button */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
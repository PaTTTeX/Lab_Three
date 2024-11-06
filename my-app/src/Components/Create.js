// Importing necessary React hooks and axios for making HTTP requests
import { useState } from "react";
import axios from 'axios';

function Create() {
  // State hooks to store the movie details (title, year, and poster URL)
  const [title, setTitle] = useState('');   // Movie title state
  const [year, setYear] = useState('');     // Movie year state
  const [poster, setPoster] = useState(''); // Movie poster URL state

  // Handle form submission when the user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    
    // Log the movie details for debugging
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
    
    // Prepare the movie object to send to the server
    const movie = {
      title: title,
      year: year,
      poster: poster
    };
    
    // Make a POST request to the server with the movie data
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data))  // Log the server response on success
      .catch((err) => console.log(err.data)); // Log any error if the request fails
  };

  return (
    <div>
      <h2>This is my Create Component.</h2>
      
      {/* Form to collect movie details from the user */}
      <form onSubmit={handleSubmit}>
        
        {/* Input field for movie title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input 
            type="text" 
            className="form-control"
            value={title} // Bind the input field to the title state
            onChange={(e) => { setTitle(e.target.value) }} // Update title state when the user types
          />
        </div>
        
        {/* Input field for movie year */}
        <div className="form-group">
          <label>Movie Year: </label>
          <input 
            type="number" 
            className="form-control"
            value={year} // Bind the input field to the year state
            onChange={(e) => { setYear(e.target.value) }} // Update year state when the user types
          />
        </div>
        
        {/* Input field for movie poster URL */}
        <div className="form-group">
          <label>Movie Poster URL: </label>
          <input 
            type="text" 
            className="form-control"
            value={poster} // Bind the input field to the poster state
            onChange={(e) => { setPoster(e.target.value) }} // Update poster state when the user types
          />
        </div>
        
        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;

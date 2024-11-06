// Import the express module and create an Express application
const express = require('express');
const app = express();

// Define the port for the server to listen on
const port = 4000;

// Import body-parser to parse incoming request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));  // Middleware to parse URL-encoded data


// Start the server and log a message indicating it's running
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Define a GET route for fetching movie data at "/api/movies"
app.get('/api/movies', (req, res) => {
    // Static array of movie objects to simulate an API response
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ movies });  // Send the list of movies as a JSON response
});

// Import and use the CORS middleware to allow cross-origin requests
const cors = require('cors');
app.use(cors());

// Define a POST route to receive movie data (e.g., add a movie)
app.post("/api/movies", (req, res) => {
    const movie = req.body.title;  // Extract movie title from the request body
    console.log(req.body);  // Log the request body to the console
})

// Middleware to handle CORS headers, enabling cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  // Allow all domains to access the API
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");  // Allow various HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  // Allow specific headers
  next();  // Continue to the next middleware or route handler
});

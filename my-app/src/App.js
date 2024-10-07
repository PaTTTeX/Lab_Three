import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  const location = useLocation(); // Gets the current URL like /create or /read

  return (
    <>
      {/* Always shows the Navigation Bar */}
      <NavigationBar />

      {/* If the URL is /create, show the Header */}
      {location.pathname === '/create' && <Header />}

      {/* Define the different pages (routes) */}
      <Routes>
        {/* Show the Content component when the URL is /home */}
        <Route path="/home" element={<Content />} />  
        
        {/* Display "Read Component" text when the URL is /read */}
        <Route path="/read" element={<h1>Read Component</h1>} />
        
        {/* Display "Create Component" text when the URL is /create */}
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>

      {/* If the URL is /read, show the Footer */}
      {location.pathname === '/read' && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      {/* The App is wrapped in the Router to enable URL routing */}
      <App />
    </Router>
  );
}

export default AppWrapper;

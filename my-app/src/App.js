import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Read from './Components/Read';
import Create from './Components/Create';

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
        <Route path="/Read" element={<Read />} />
        
        {/* Display "Create Component" text when the URL is /create */}
        <Route path="/Create" element={<Create />} />
      </Routes>

      {/* If the URL is /read, show the Footer */}
      {location.pathname === '/Read' && <Footer />}
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

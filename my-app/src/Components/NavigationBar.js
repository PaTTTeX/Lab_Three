import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap Navbar components
import { Link } from 'react-router-dom'; // Import Link to enable routing

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg"> {/* Create a lightthemed,  Navbar */}
      <Navbar.Brand href="#">React App</Navbar.Brand> {/* The brand name/logo  app */}

      {/* Nav section with links to different pages */}
      <Nav className="mr-auto">
        {/* Link to the Home page */}
        <Nav.Link as={Link} to="/home">Home</Nav.Link>  
        
        {/* Link to the Read page */}
        <Nav.Link as={Link} to="/read">Read</Nav.Link>  
        
        {/* Link to the Create page */}
        <Nav.Link as={Link} to="/create">Create</Nav.Link>  
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;

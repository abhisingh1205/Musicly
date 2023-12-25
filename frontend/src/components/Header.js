import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  const id = Cookies.get("id");
  console.log("Id = ", id);

  const LogoutHandler = () => { 
    navigate('/login')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Musicly</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          {id ? (
            <div>
              <LinkContainer to="/artists">
                <Navbar.Brand>Artists</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/songs">
                <Navbar.Brand>Songs</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/logout">
                <Navbar.Brand onClick={LogoutHandler}>Logout</Navbar.Brand>
              </LinkContainer>
            </div>
          ) : (
            <LinkContainer to="/login">
              <Navbar.Brand>Login</Navbar.Brand>
            </LinkContainer>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

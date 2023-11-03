import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import imagen from '../../assets/LOGO1.jpg'
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark">
            <Container fluid>
                <img className='imgLogo' src= {imagen} />
                <Navbar.Brand href="#">PastaLú</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100rem' }}
                        navbarScroll
                    >
                        <Link className="nav-link" to="/">Inicio</Link>
                        <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action1">
                                Todos los productos
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action2">
                                Raviolones
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action3">
                                Sorrentinos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Tallarines
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Ñoquis
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action6">
                                Canelones
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                    <Link to='/cart'>
                        <CartWidget />
                    </Link>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
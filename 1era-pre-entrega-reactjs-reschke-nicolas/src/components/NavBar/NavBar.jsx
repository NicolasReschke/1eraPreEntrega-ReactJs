import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imagen from '../../assets/LOGO1.jpg'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark">
            <Container fluid>
                <img className='imgLogo' src= {imagen} />
                <Navbar.Brand>PastaLú</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100rem' }}
                        navbarScroll
                    >
                        <Link className="nav-link" to="/">
                            Inicio
                        </Link>
                        <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
                            <Link className='nav-link dropdown-toggle btn btn-outline-success' to='/'>
                                Todos los productos
                            </Link>
                            <NavDropdown.Divider />
                            <Link className='dropdown-item' to='/category/ñoquis'>
                                Ñoquis
                            </Link>
                            <Link className='dropdown-item' to='/category/tallarines'>
                                Tallarines
                            </Link>
                            <Link className='dropdown-item' to='/category/raviolones'>
                                Raviolones
                            </Link>
                            <Link className='dropdown-item' to='/category/sorrentinos'>
                                Sorrentinos
                            </Link>
                            <Link className='dropdown-item' to='/category/canelones'>
                                Canelones
                            </Link>
                            <Link className='dropdown-item' to='/category/empanadas'>
                                Empanadas
                            </Link>
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
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

import imagen from '../../assets/LOGO1.jpg'
import { CartWidget } from '../CartWidget/CartWidget'

const categorys = [
    {id: '1', name: 'Ñoquis', category: 'ñoquis'},
    {id: '2', name: 'Tallarines', category: 'tallarines'},
    {id: '3', name: 'Raviolones', category: 'raviolones'},
    {id: '4', name: 'Sorrentinos', category: 'sorrentinos'},
    {id: '5', name: 'Empanadas', category: 'empanadas'}
]

function NavBar () {
    return (
        <Navbar expand="lg" className="navbar-dark bg-dark">
            <Container fluid>
                <img className='imgLogo' src= {imagen} />
                <h5>PastaLú</h5>
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
                                {categorys.map(category => 
                                    <Link
                                        key={category.id}
                                        className="dropdown-item"
                                        to={`/category/${category.category}`}
                                    >
                                        {category.name}
                                    </Link>
                                    )
                                }
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
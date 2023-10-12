import Titulo from "../Titulo/Titulo.jsx"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
    const subtituloForm= "¿Qué estás buscando?"
    return (
        <Form className="d-flex">
            <Titulo 
                subTitulo={subtituloForm}
            />
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default Formulario

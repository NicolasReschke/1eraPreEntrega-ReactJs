import './Form.css'

export const Form = ({formData, handleOnChange, errors, validateForm}) => {

    const handleOnSubmit = (evt) => {
        evt.preventDefault()
        if (validateForm()) {
        }
    }

    return (
        <>
        <div className="formClass">
            <h3>Si queres realizar algún comentario sobre nuestros productos, dejanos tu contacto:</h3>
        </div>
        <div>
            <form onSubmit={handleOnSubmit}>            
                <input 
                    type='text' 
                    name='nombre' 
                    placeholder="Ingrese su nombre:"
                    value={formData.nombre}
                    onChange={handleOnChange}
                />
                <br />
                {errors && errors.nombre && <span>{errors.nombre}</span>}
                <br />
                
                <input 
                    type='text' 
                    name='cel' 
                    placeholder="Ingrese su número:"
                    value={formData.cel}
                    onChange={handleOnChange}
                />
                <br />
                {errors && errors.cel && <span>{errors.cel}</span>}
                <br />
                <button>Enviar</button>
            </form>
        </div>
        </>
    )
}
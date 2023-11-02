import { useState } from "react"
import { Form } from "./Form"
import { formWhitValidation } from "./fromWhitValidation"

const FormWhitValidation = formWhitValidation(Form)

const FormContainer = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        cel: ''
    })   

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    
    return (
        <FormWhitValidation 
            formData={formData}
            handleOnChange={handleOnChange}
        />
    )
}

export default FormContainer
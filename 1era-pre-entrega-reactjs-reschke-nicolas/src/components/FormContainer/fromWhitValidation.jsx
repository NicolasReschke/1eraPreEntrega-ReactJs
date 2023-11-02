import { useState } from "react"

export const formWhitValidation = (FormWrappedComponent) => {


    const NewFormWhitValidation = (props)=> {
        const [errors, setError] = useState({})

        const validateForm = () => {
            let newErrors = {}
            let isValid  = true

            if (!props.formData.nombre) {
                newErrors.nombre = 'El campo nombre es obligatorio'
                isValid = false
            }
            if (!props.formData.cel) {
                newErrors.cel = 'El campo número es obligatorio'
                isValid = false                
            }
            setError(newErrors)
            return isValid
        }
        
        return (
            <FormWrappedComponent
                {...props}
                errors = {errors}
                validateForm={validateForm}
            />
        )
        
    }

    return NewFormWhitValidation 

}
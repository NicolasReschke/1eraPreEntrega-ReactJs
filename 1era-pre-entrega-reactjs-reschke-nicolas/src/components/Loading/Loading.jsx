
import { useEffect } from 'react'
import './Loading.css'

export const Loading = () => {
    useEffect(() =>{
        return() =>{
            console.log("desmontaje del loading");
        }
    })
    return <img className="sample" src="/assets/sample2.gif" alt="" />
}
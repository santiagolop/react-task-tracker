import { Link } from "react-router-dom"

export const About = ({setForm}) => {
    
    setForm(false)
    return (
        <div>
            <h4>Made by Santiago López</h4>
            <Link to="/">Volver</Link>
        </div>
    )
}
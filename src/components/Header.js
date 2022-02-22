import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { Button } from './Button'
export const Header = ({title, toggleForm, formState}) => {

    const location = useLocation()

    return (
        <header className='header'>
        <h1>
            {title}
        </h1>
        { location.pathname === '/' && 
        (
            <Button 
            color={formState ? 'red' : 'green'} 
            text={formState ? 'Close' : 'Add'} 
            onClick={toggleForm}/>
        )
        }
        </header>

    )
}

Header.defaultProps = { title: "Task Tracker"}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

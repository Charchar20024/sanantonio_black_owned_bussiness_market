import logo from '../assets/logo.png'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='logo' src={logo}/>
            <div className='background'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header
import logo from '../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
            <div className="logo">
                <img src={logo} alt="sw logo"/>
                <h1>Shop Wise</h1>
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Products</a>
            </div>
            </div>
        </nav>
    )
}
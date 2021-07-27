import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1>Representative Finder</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
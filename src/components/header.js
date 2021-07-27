import {Link} from 'react-router-dom'

function Header() {
    return(
        <header>
            <h1>Find Representatives by Address</h1>
            <nav>
                <ul>
                    <li><button><Link to="/">Home</Link></button></li>
                    <li><button><Link to="/signup">Sign Up</Link></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import Logo from './img/logo.svg';



function Navbar() {

    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to='/'>
                    <img className='companyLogo' src={Logo} href='#'></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about' >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/catalog' >Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/admin' >Admin</Link>
                        </li>
                    </ul>
                </div>
                <form class="d-flex" role="search">
                    <button className='btn btn-outline-info'>
                        {user.name}
                    </button>
                    <Link class="btn btn-info cartBtn" to='/cart'>
                    <span class="badge rounded-pill text-bg-light checkoutBtn">{cart.length}</span>Cart
                    </Link>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
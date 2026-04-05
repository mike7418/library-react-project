import React from 'react';
import Logo from '../assets/images/Library.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt="Bookstore logo" className="footer__logo--img" />
                        </figure>
                    </a>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/books" className="footer__link">Books</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">Copyright &copy; Library 2024 All rights reserved.</div>
                </div> 
            </div>
        </footer>
    ) 
}

export default Footer;
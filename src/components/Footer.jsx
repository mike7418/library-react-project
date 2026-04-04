import React from 'react';
import Logo from '../assets/images/Library.svg';

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
                        <a hred="/" className="footer__link">Home</a>
                        <span className="footer__link no-cursor">About</span>
                        <a hred="/books" className="footer__link">Books</a>
                        <a hred="/cart" className="footer__link">Cart</a>
                    </div>
                    <div className="footer__copyright">Copyright &copy; Library 2024 All rights reserved.</div>
                </div> 
            </div>
        </footer>
    ) 
}

export default Footer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price'

const BookInfo = ({books}) => {
   const { id } = useParams();
   const book = books.find(book => book.id = id);
   console.log(book)
    return (        
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                           <Link to="/books" className="book__link">
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" className="book__selected--img" />
                            </figure>
                            <div className="book__selected--description">
                            <h2 className="book__selected--title">
                                {book.title}
                            </h2>
                            <Rating rating={book.rating} />
                            <div className="book__selected--price">
                                <Price salePrice ={book.salePrice} originalPrice = {book.originalPrice}  />
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">
                                    Summary
                                </div>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <button className="btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                </div>
                 <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <div className="book__selected--title--top">
                                Recommended Books 
                            </div>
                        </div>
                    </div>
                 </div>
            </main>
        </div> 
    )
};

export default BookInfo;

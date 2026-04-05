import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Book = ({ book }) => {
    return (
        
        <div className="book">
            <a href="#">
                <figure className="book__img--wrapper">
                        <img src={book.url} alt="" className="book__img" />
                </figure>
            </a>
            <div className="book__title">
                <a href={`/books/${book.id}`} className="book__title--link">
                   {book.title}
                </a>
            </div>
                <div className="book__ratings">

                    {[...Array(Math.floor(book.rating))].map((_, i) => <FontAwesomeIcon key={i} icon="star" />)}
                    {book.rating % 1 !== 0 && <FontAwesomeIcon icon="star-half-alt" />}
            </div>
            <div className="book__price">
                {(book.salePrice != null)
                    ? (
                        <>
                            <span className="book__price--normal">{book.originalPrice}</span>
                            {book.salePrice}
                        </>
                    )
                    : (
                        book.originalPrice
                    )}
            </div>
        </div>
    );
}

export default Book;
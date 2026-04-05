import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
    return (
        <div className="book__ratings">
            {
                new Array(Math.floor(rating)).fill(0).map((_, i) => 
                <FontAwesomeIcon key={i} icon="star" />)
            }
            {rating % 1 !== 0 && <FontAwesomeIcon icon="star-half-alt" />}
            {/* {[...Array(Math.floor(rating))].map((_, i) => <FontAwesomeIcon key={i} icon="star" />)}
            {rating % 1 !== 0 && <FontAwesomeIcon icon="star-half-alt" />} */}
        </div>
    )
}
           
export default Rating;
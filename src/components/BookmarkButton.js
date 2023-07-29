import React, { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs"; // Importing bookmark icons

const BookmarkButton = ({ temple }) => {
    const [bookmarked, setBookmarked] = useState(false); // Initial state

    const handleBookmarkClick = () => {
        setBookmarked(!bookmarked);
        // Here you might want to save the bookmarked state in a database, localStorage or any other preferred method
    };

    return (
        <button onClick={handleBookmarkClick} className="bookmark-button">
            {bookmarked ? <BsBookmarkFill /> : <BsBookmark />}
        </button>
    );
};

export default BookmarkButton;

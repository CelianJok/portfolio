import React, { useState } from "react";
import './ReadMore.scss';

type PropTypes = {
    children: string;
}

const ReadMore: React.FC<PropTypes> = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div className="contentReadMore">
            <p>
                {text.slice(0, 200)}
                <span onClick={toggleReadMore} className="readMore">
                    {" ...lire la suite"}
                </span>
            </p>
        </div>
        
    )
}

export default ReadMore;
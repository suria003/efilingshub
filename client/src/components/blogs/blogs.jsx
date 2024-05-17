import React, { useState } from 'react';
import './blogs.css';
import articleImage from '../../image/article-blog.png';

function Blogs() {
    const [expanded, setExpanded] = useState(false);

    const toggleContentWidth = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    const [bexpanded, setBexpanded] = useState(false);

    const toggleBContentWidth = () => {
        setBexpanded(prevExpanded => !prevExpanded);
    };

    const [cexpanded, setCexpanded] = useState(false);

    const toggleCContentWidth = () => {
        setCexpanded(prevExpanded => !prevExpanded);
    }
    return (
        <>
            <div className="blogs-container">
                <h3>Our <span className="article-blog">Article</span>
                    <img src={articleImage} alt="" />
                </h3>
                <div className={`a-blog ${expanded ? 'expanded' : ''}`} >
                    <div className="a-blog-content">
                        <h1></h1>
                        <div className="Post-Image"></div>
                        <a href="#">Read</a>
                    </div>
                    <button className="a-blog-button" onClick={toggleContentWidth}>A</button>
                </div>
                <div className={`b-blog ${bexpanded ? 'bexpanded' : ''}`}>
                    <div className="b-blog-content">
                        <h1></h1>
                        <div className="Post-Image"></div>
                        <a href="#">Read</a>
                    </div>
                    <button className="b-blog-button" onClick={toggleBContentWidth}>B</button>
                </div>
                <div className={`c-blog ${cexpanded ? 'cexpanded' : ''}`}>
                    <div className="c-blog-content">
                        <h1></h1>
                        <div className="Post-Image"></div>
                        <a href="#">Read</a>
                    </div>
                    <button className="c-blog-button" onClick={toggleCContentWidth}>C</button>
                </div>
            </div>
        </>
    );
}

export default Blogs;
import React from 'react';

function NewsItem ({title, description, url, urlToImage}) {
    return (
        <div className='news-item'>
            <img className='picture' src={urlToImage} alt="News pic" width='320px' height="200px"/>
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem;
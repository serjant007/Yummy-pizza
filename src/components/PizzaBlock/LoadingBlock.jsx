import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={288}
            height={457}
            viewBox="0 0 288 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="131" cy="130" r="130" />
            <rect x="0" y="270" rx="0" ry="0" width="288" height="24" />
            <rect x="0" y="310" rx="6" ry="6" width="288" height="84" />
            <rect x="0" y="420" rx="4" ry="4" width="90" height="27" />
            <rect x="138" y="411" rx="30" ry="30" width="150" height="44" />
        </ContentLoader>
    );
}

export default LoadingBlock;

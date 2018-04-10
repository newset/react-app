import React from 'react';
import { Link } from 'react-router-dom';

const PageA = () => {
    return (
        <div>
            PageA
            <Link to="/b">go to pageB</Link>
        </div>
    );
};

export default PageA;

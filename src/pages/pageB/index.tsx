import React from 'react';
import { Link } from 'react-router-dom';

const PageB = () => {
    return (
        <div>
            PageB
            <Link to="/a">go to pageA</Link>
        </div>
    );
};

export default PageB;

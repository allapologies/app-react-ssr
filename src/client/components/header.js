import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <Link to='/'>React SSR</Link>
        </div>
    );
};

export default Header;

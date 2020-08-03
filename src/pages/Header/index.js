import React from 'react';
import './styles.css';

function Header(props) {
    return (
        <div>
            <header>
                <div>
                    <h1>{props.title}</h1>
                </div>
            </header>
        </div>
    );
}

export default Header;
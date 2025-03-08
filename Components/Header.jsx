import React from 'react';

const Header = () => {
    return (
        <header>
            <h1 style={headingStyle}>react app</h1>
           
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker',
}

const headingStyle={
    color: 'red',
    backgroundColor: 'black'
}


export default Header;
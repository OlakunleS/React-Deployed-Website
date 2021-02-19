import React from 'react';


const Menu = props => {
    return (
        <div className={`menu-container ${props.showMenu}`}>
            <div className="overlay" />
            <div className="menu-items">
                <ul>
                    <li>
                        <a href="#welcome-section" onClick={props.toggleMenu}>HOME </a>
                    </li>
                    <li>
                        <a href="#about" onClick={props.toggleMenu}>Gallery</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={props.toggleMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={props.toggleMenu}> About Me</a>
                    </li>
                </ul>
                <SocialLinks />
            </div>
        </div>
    ); /*Don't Forget */
};





/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
    return (
        <div className="social">
            <a
                href="https://twitter.com/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Twitter profile"
            >
                {' '}
                <i className="fab fa-twitter" />
            </a>
            <a
                id="profile-link"
                href="https://github.com/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's GitHub Profile"
            >
                {' '}
                <i className="fab fa-github" />
            </a>
            <a
                href="https://codepen.io/yagoestevez"
                target="_blank"
                rel="noopener noreferrer"
                title="Link to author's Codepen Profile"
            >
                {' '}
                <i className="fab fa-codepen" />
            </a>
        </div>
    );
};

export default Menu;


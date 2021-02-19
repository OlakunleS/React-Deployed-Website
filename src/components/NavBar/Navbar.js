import React from 'react';


const Nav = props => {
    return (
        <React.Fragment>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <p className="insignia">
                        Kunru<strong>Kindrex</strong>
                    </p>
                    <div className="nav-items">
                        <ul>
                            <li>
                                <a href="index.html" >HOME </a>
                            </li>
                            <li>
                                <a href="#about" >Gallery</a>
                            </li>
                            <li>
                                <a href="#projects" >Projects</a>
                            </li>
                            <li>
                                <a href="#contact" > About Me</a>
                            </li>
                        </ul>
                    </div>
                    <a
                        onClick={props.toggleMenu}
                        className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
                    >
                        <span />
                    </a>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default Nav;
import React from 'react';
import Stats from './Stats';

function Header(props) { 
/*adds a prop*/
    return (
        <header>
            <Stats players= { props.players}/>
            <h1>{ props.banner }</h1>
        </header>
    );
}

export default Header;
import React from 'react';
import CB0000PhillySans from '../../assets/img/CB0000PhillySans.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return ( 
     <nav className="Menu">
         <a href="/">
            <img className="CB0000PhillySans" src={CB0000PhillySans} alt="Beatmaker CB0000PhillySans" /> 
         </a>

        <Button as="a" className="ButtonLink" href="/">
            Novo vídeo  
        </Button>
    </nav>
    );
}

export default Menu;

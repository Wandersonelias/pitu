import React from 'react';
import {} from 'react-bootstrap';
import {HeaderContainer,Logo} from '../Header/styles';
import Icone from '../../assets/logo.png';
 
function Header(props) {
    
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt="Pitu - Encurador de URL"/>
                <h1>Dogli</h1>
                <p>{props.children}</p>
            </HeaderContainer>

        </>
    )
}

export default Header;
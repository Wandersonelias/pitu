import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Icon from '../../assets/logo.png';
import {NavLink} from './styles';

function NavBar() {
    return(
        <>
            <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">
                            <img src={Icon}
                                alt="logotipo do site"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"        
                                />{' '} Dogli
                    </Navbar.Brand>
                    <Nav className="ml-auto" variant="light">
                    <Nav.Link href="#deets" className="">
                        <NavLink>
                             CADASTRE SE
                        </NavLink>    
                    </Nav.Link>
                    <Nav.Link href="#memes">
                        <NavLink>
                            ENTRAR
                        </NavLink>
                    </Nav.Link>
    </Nav>
            </Navbar>
        </>
    )    
}


export default NavBar;
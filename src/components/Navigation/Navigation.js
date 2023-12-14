import { Container, Dropdown, Navbar } from 'react-bootstrap';
import './Navigation.css'
import { Search } from 'react-bootstrap-icons';
import Logo from '../Logo.png'
import {SignupModal, LoginModal} from '../MyModal/MyModal'
import { useState } from 'react';

const Navigation = () => {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [signupModalShow, setSignupModalShow] = useState(false)

    return(
        <>
        <Navbar collapseOnSelect expand={"lg"} id='navbar' sticky='top'>
            <Container className='d-flex justify-content-center'>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
            </Container>

            <Container className='d-flex justify-content-center'>
                <Search style={{position: 'relative', left: '30px'}}/>
                <input type="text" name="navbarsearch" id="navbarsearch" placeholder='Search for your favourite groups in ATG'/>
            </Container>

            <Container className='d-flex justify-content-center'>
                <span id='navbarSpan1'>Create account.</span>
                <span id='navbarSpan2'>It's free</span>
                <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic"></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" onClick={()=>setLoginModalShow(true)}>Login</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={()=>setSignupModalShow(true)}>Signup</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Container>
        </Navbar>

        <SignupModal 
        show={signupModalShow}
        onHide={() => setSignupModalShow(false)}
        />
        <LoginModal 
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
        />
        </>
    )
}

export default Navigation;
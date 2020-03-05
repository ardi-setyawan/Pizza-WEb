import React,{Component} from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class Header extends Component{
    render() {
        return(
            <div className="container">        
                <Navbar className="container" bg="dark" variant="dark" absolute="top">
                    <Navbar.Brand href="#home">CemoroPizza</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">All Menu</Nav.Link>
                    <Nav.Link href="#pizza">Pizza</Nav.Link>
                    <Nav.Link href="#minuman">Minuman</Nav.Link>
                    <Nav.Link href="#nasi">Nasi</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
            
        );
    }
        

}

export default Header;
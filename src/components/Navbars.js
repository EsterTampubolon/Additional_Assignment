import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Navbars = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <NavDropdown title="All Types" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Premium</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Standard</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Below Standard</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Best Seller</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link href="#home">Product Popular</Nav.Link>
                            <Nav.Link href="#link">Low Price</Nav.Link>
                            <Nav.Link href="#link">High Price</Nav.Link>
                        </Nav>
                        <NavDropdown title="Price" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Cheap price </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Price can be reached</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Expensive price</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Best seller</NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars

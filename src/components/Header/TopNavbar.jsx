import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";

const TopNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white">

            <Navbar.Brand href="#">
                <img src={"5551.png"} width={"150"} height={"50"}/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

            <Navbar.Collapse id="responsive-navbar-nav">


                <Form inline className="mx-5 ">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-primary">Search</Button>
                </Form>


                <div className={`mr-auto`}>
                    <span style={{cursor: "pointer"}}><img src="geofence_5400.ico" alt="" width='25px'/>Республика Ингушетия</span>
                </div>


                <Nav>
                    <Nav.Link href="#">Sign in</Nav.Link>
                    <Nav.Link eventKey={'registration'} href="#/registration">Sign up</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    )
};
export default TopNavbar;
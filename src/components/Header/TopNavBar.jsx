import React from 'react';
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import style from "./Header.module.css";

const TopNavBar = ({topNavBarHide}) => {

    return (
        <Navbar id="topNavBar" collapseOnSelect expand="lg" bg="white"
                className={(!topNavBarHide) ? style.hide : style.topNavBar}>

            <Navbar.Brand href="#">
                <img src={"5551.png"} width={"150"} height={"50"}/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

            <Navbar.Collapse id="responsive-navbar-nav">


                <Form inline className={`mx-lg-5 ${style.searchForm}`}>
                    <FormControl type="text" placeholder="Поиск" className="mr-sm-2"/>
                    <Button variant="outline-primary">Искать</Button>
                </Form>


                <div className={`mr-lg-auto ${style.geo}`}>
                    <span style={{cursor: "pointer"}}><img src="geofence_5400.ico" alt="" width='25px'/>Республика Ингушетия</span>
                </div>


                <Nav>
                    <Nav.Link eventKey={'signIn'} href="#/signIn">Вход</Nav.Link>
                    <Nav.Link eventKey={'registration'} href="#/registration">Регистрация</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    )
};
export default TopNavBar;
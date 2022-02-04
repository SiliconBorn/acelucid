import React from 'react';
import {Nav,Container,NavbarBrand,NavItem } from 'reactstrap';
import {  Link} from 'react-router-dom';


export const Heading = () => {
  return(

<Nav colour='dark'>
    <Container>
        <NavbarBrand><img src='../logo/Acelucid logo.png' alt='acelucid_logo'></img></NavbarBrand>
        <Nav>
    <NavItem><Link className='btn btn-primary' to='/adduser'>ADD NEW USERS</Link></NavItem>
        </Nav>
    </Container>
</Nav>


  )
};

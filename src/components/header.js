import * as React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
// import {FaBars} from "react-icons/fa"
import MenuIcon from '@material-ui/icons/Menu';
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Logo from '../assets/images/logo.png';
import './Logo.css';

const Header = () => {


  return (
    <Nav>

      <NavLink to = "/"> <img className="logo" src={Logo}></img></NavLink>
      {/* <Bars/> */}
      <NavMenu>
        {menuData.map((item, index) => (

          <NavLink to={item.link} key={index}>

            {item.title}


          </NavLink>





        ))}



      </NavMenu>

      <NavBtn>

        <Button primary="true" round="true" to="/trips">Book a Flight</Button>



      </NavBtn>


    </Nav>
  )
}



export default Header

const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px) / 2);
z-index: 100;
position: relative;

`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;



`







const Bars = styled(MenuIcon)`
display: none;
color: #FFFFFF;



@media screen and (max-width: 768px) {

  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.88em;
  cursor: pointer;
}

`

const NavMenu = styled.div`
display: flex;
align-items: center;
/* margin-right: -48px; */
font-family: 'Teko', sans-serif;


@media screen and (max-width: 768px) {

  display: none;
}


`

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;


@media screen and (max-width: 768px) {

  display: none;
}




`

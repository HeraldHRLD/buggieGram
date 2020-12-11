import React from 'react';
import { Nav, Link } from './styles';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';


export const NavBar = () => {
  return (
    <Nav>
      <Link to="/home"><MdHome size="25px" /></Link>
      <Link to="/favs"><MdFavoriteBorder size="25px" /></Link>
      <Link to="/user"><MdPersonOutline size="25px" /></Link>
    </Nav>
  )
}
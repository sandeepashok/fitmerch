import styled from '@emotion/styled'
import { NavLink, Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { IoShirtSharp } from 'react-icons/io5'
import { TYPES } from '../../context/actionTypes';
import { useDispatch } from 'react-redux';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 4px rgb(0 0 0/5%);
  z-index: 2;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const BrandContainer = styled(Link)`
  width: 155px;
  font-size: 1.75rem;
  font-style: italic;
  display: flex;
  align-items:center;
  margin: 16px 30px;
  text-decoration: none;
  transition: all .2s linear;
  &:hover{
    transform: scale(1.15);
  }
`
const BrandName = styled.h1`
  color: #823FBD;
  font-size: 28px;
  font-weight: 700;
  text-decoration: none;
`
const Brand = styled.img`
  height: 50px;
  margin-left: -12px;
  margin-top: -8px;
`
const NavLinksContainer = styled.div`
  margin: 16px 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    margin: 16px;
  }
`
const Navlink = styled(NavLink)`
  margin: 8px 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: #FF406D;
  transition: all .1s linear;
  &:hover {
    transform: scale(1.2);
  }
`
const NavLinkText = styled.p`
  padding-left: 4px;
  color: #823FBD;
  font-weight: bold;
  &:active {
    color: #6c349d;
  }
`


const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <NavContainer>
      <BrandContainer to="/" onClick={() => dispatch({ type: TYPES.CLEAR_ALL })}>
        <BrandName>FitMerch</BrandName>
        <Brand src='assets/logo.jpg' alt='logo' />
      </BrandContainer>
      <NavLinksContainer>
        <Navlink style={({ isActive }) => {
          return {
            transform: isActive ? "scale(1.2)" : "",
            color: isActive ? "#FF406D" : ""
          };
        }} to="/shop" onClick={() => dispatch({ type: TYPES.CLEAR_ALL })}><IoShirtSharp /> <NavLinkText>Shop</NavLinkText></Navlink>
        <Navlink style={({ isActive }) => {
          return {
            transform: isActive ? "scale(1.2)" : "",
            color: isActive ? "#FF406D" : ""
          };
        }} to="/wishlist" onClick={() => dispatch({ type: TYPES.CLEAR_ALL })}><FaHeart /> <NavLinkText>Wishlist</NavLinkText></Navlink>
        <Navlink style={({ isActive }) => {
          return {
            transform: isActive ? "scale(1.2)" : "",
            color: isActive ? "#FF406D" : ""
          };
        }} to="/cart" onClick={() => dispatch({ type: TYPES.CLEAR_ALL })}><FaShoppingCart /> <NavLinkText>Cart</NavLinkText></Navlink>
      </NavLinksContainer>
    </NavContainer>
  )
}

export default Navbar;
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import "./topbar.css";
import styled from 'styled-components';
import { Link } from "react-router-dom";
// import { mobile } from "../responsive";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px", margin: "0 0 15px 0" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 3px;
  width: 270px;
  @media screen and (max-width: 768px){
    display: none;
  }

`;

const Input = styled.input`
  border: none;
  
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-right: 15px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export default function TopBar() {
  const user = false;
  return (
    <Container >
      <Wrapper>
        <Left>
          <Link to='/' style={{ textDecoration: "none", color: "#444" }}>
            <Logo>YCS VIETNAM</Logo>
          </Link>

          <SearchContainer>
            <input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 30 }} />
          </SearchContainer>
        </Left>

        <Right>
          <MenuItem><Language> EN </Language></MenuItem>
          <MenuItem> <Link to='/register' style={{ textDecoration: "none", color: "#444" }}>REGISTER</Link></MenuItem>
          <MenuItem><Link to='/login' style={{ textDecoration: "none", color: "#444" }}>LOGIN</Link></MenuItem>
          <MenuItem>

            <Link to='/cart/UserId' style={{ textDecoration: "none", color: "#444" }}> <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge> </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container >
  )
}

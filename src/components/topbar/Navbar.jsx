import styled from "styled-components"
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  border-top: 0.1px solid #DDF2C4;
  border-bottom: 0.1px solid #DDF2C4;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 22px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 700;
  color: #444; 
 
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <MenuItem ><Link to='/' style={{ textDecoration: "none", color: "#444" }}>Home</Link></MenuItem>
        <MenuItem> <Link to='/products' style={{ textDecoration: "none", color: "#444" }}>Shopping</Link></MenuItem>
        <MenuItem><Link to='/tours' style={{ textDecoration: "none", color: "#444" }}>Thing to do</Link></MenuItem>
        <MenuItem>Foods & Drinks</MenuItem>
        <MenuItem> <Link to='/blogs' style={{ textDecoration: "none", color: "#444" }} > Blogs</Link></MenuItem>
        <MenuItem>Travel community</MenuItem>
      </Wrapper>
    </Container >
  )
}

export default Navbar
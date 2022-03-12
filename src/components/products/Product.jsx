import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  justify-content: end;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  z-index: 2;
  
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 180px;
  max-width: 200px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
 
  
`;


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductDetail = styled.div`
display:flex;
position: absolute;
z-index: 3;
color: white;
text-shadow: 1px 1px #444;
height: 100%;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Price = styled.p`
font-size: 18px;
margin-top: 10px;


`;
const ProductName = styled.h3`
font-size: 20px;

margin: 10px;
top: 100px;
`
const Location = styled.div`
margin-top: 10px;
display: flex;
top: 200px;
align-items: center;
`
const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>

      </Info>
      <ProductDetail>
        <Link to='/product/:ProductID' style={{ textDecoration: 'none', color: 'white', textShadow: ' 1px 1px #444' }} >
          <ProductName>{item.name}</ProductName>
          <Location><LocationOnIcon /> {item.location}</Location>
          <Price>Price: {item.price} {item.unit}</Price>
        </Link>
      </ProductDetail>

    </Container >
  );
};

export default Product;
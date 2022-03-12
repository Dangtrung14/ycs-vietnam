import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, TimelapseOutlined } from "@mui/icons-material";
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
  height: 200px;
  width: 100%;
  position: absolute;
  top:0;
  object-fit: cover;
  border-radius: 5px;
  z-index: 2;
  
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  max-width: 320px;
  height: 410px;
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

const TourDetail = styled.div`
display:flex;
position: absolute;
z-index: 3;
top: 210px;
height: 100%;
width: 100%;
flex-direction: column;
color: rgb(22, 22, 22);
`
const Price = styled.p`
font-size: 18px;
margin-top: 10px;
margin: 7px;

`;
const TourName = styled.h3`
font-size: 20px;
margin: 7px;
margin: 10px;
top: 100px;
`
const Location = styled.div`
margin-top: 10px;
display: flex;
top: 200px;
align-items: center;
text-align: center;
margin: 7px;
`
const TourDuration = styled.div`
font-size: 14px;
align-items: center;
margin: 7px;
display: flex;
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
      <TourDetail>

        <Location><LocationOnIcon /> {item.location} </Location>
        <TourDuration> <TimelapseOutlined /> {item.duration}  </TourDuration>
        <TourName>{item.title}</TourName>
        <Price>Price: {item.price} {item.unit}</Price>
      </TourDetail>

    </Container >
  );
};

export default Product;
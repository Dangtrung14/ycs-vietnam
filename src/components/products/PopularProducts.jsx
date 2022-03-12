import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 15px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #D9D6D0;
  padding: 10px;
  text-shadow: 2px 2px white;
  color: rgb(46, 46, 46);
  `;

const Products = () => {
    return (
        <Container>
            <Title>POPULAR PRODUCTS</Title>

            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
import styled from "styled-components";
import Navbar from "../../components/topbar/Topbar";
import Announcement from "../../components/topbar/Announciment";
import Posts from "../../components/posts/Posts";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const PostList = () => {
    return (
        <Container>
            <Title>EXPLORE VIETNAM THROUGH OUR BLOG</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Posts:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Type
                        </Option>
                        <Option>Travel Tips</Option>
                        <Option>Destinations</Option>
                        <Option>Cultures</Option>
                        <Option>Foods</Option>
                        <Option>Adventures</Option>
                        <Option>Cruises</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Places
                        </Option>
                        <Option>Ha Giang</Option>
                        <Option>Hoi An</Option>
                        <Option>Ninh Binh</Option>
                        <Option>Hanoi</Option>
                        <Option>Cat Ba</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Posts />

        </Container>
    );
};

export default PostList;
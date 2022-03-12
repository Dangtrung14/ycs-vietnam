import Post from "../post/Post"
import Styled from "styled-components"

const Container = Styled.div`
display: flex;
flex-wrap: wrap;
padding: 10px;
`;

const Title = Styled.h1`
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



export default function Posts() {
    return (
        <Container>
            <Title>POPULAR POST</Title>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

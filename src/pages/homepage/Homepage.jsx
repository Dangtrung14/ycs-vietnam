
import "./homepage.css"
import "../../components/header/Header"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
// eslint-disable-next-line no-unused-vars
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import Categories from "../../components/catagories/Categories"
// eslint-disable-next-line no-unused-vars
import Newsletter from "../../components/newsletter/Newsletter"
import Products from "../../components/products/PopularProducts"
import Tours from "../../components/tours/Tours"
// eslint-disable-next-line no-unused-vars
import Announcement from "../../components/topbar/Announciment"
import ListHeadMenu from "../../components/listheadmenu/ListHeadMenu"


export default function home() {
    return (
        <>
            <Header />
            <div className="home">

                <Categories />
                <ListHeadMenu />
                <Products />
                <Tours />
                <Posts />

            </div>
        </>
    )
}

import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <div className="sideImg">
                    <img src="https://media.istockphoto.com/photos/young-woment-paints-picture-id486554762?b=1&k=20&m=486554762&s=170667a&w=0&h=rII33ToeJI2miBkf5lxQVJ_ZBEFEjjuZ0qN1KOoJ_VY=" alt="" />
                </div>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus odio iste illo sequi itaque sit quisquam ullam reprehenderit amet ut et nihil, debitis autem maxime suscipit blanditiis voluptatum voluptate? Dolorem?
                </p>
            </div>
            <span className="sidebarTitle"> CATALOGIES </span>
            <ul className="sidebarList">
                <li className="sidebarListItem"> Life</li>
                <li className="sidebarListItem"> Music</li>
                <li className="sidebarListItem"> Style</li>
                <li className="sidebarListItem"> Sport</li>
                <li className="sidebarListItem"> Tech</li>
                <li className="sidebarListItem"> Tech</li>
            </ul>
            <div className="sideBarItem">
                <span className="sidebarTiltle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i class="topIcon fa-brands fa-facebook"></i>
                    <i class="topIcon fa-brands fa-twitter"></i>
                    <i class="topIcon fa-brands fa-youtube"></i>
                    <i class="topIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}

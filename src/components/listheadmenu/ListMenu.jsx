import "./listMenu.scss";

import {

    FavoriteBorderOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";

export default function ListMenu({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://tallypress.com/wp-content/uploads/2017/12/top-10-vietnamese-restaurants-in-kl-selangor.jpg";
    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://tallypress.com/wp-content/uploads/2017/12/top-10-vietnamese-restaurants-in-kl-selangor.jpg"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <FavoriteBorderOutlined className="icon" />
                            <ShoppingCartOutlined className="icon" />

                        </div>
                        <div className="productName">
                            Ao Dai Vietnam
                        </div>

                        <div className="itemInfoTop">
                            <span>Từ: Hà Giang</span>
                            <span className="limit"> 19 usd</span>
                            <span>Đơn vị: Kg</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium hic rem eveniet error possimus, neque ex doloribus.
                            Praesentium hic rem eveniet error possimus, neque ex doloribus.
                        </div>
                        <div className="genre">Check</div>
                    </div>
                </>
            )}
        </div>
    );
}



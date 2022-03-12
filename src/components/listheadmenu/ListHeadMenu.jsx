import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import listHeadMenu from "./listHeadMenu.scss";
import ListMenu from "./ListMenu"
import { useState } from "react"


export default function List() {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    <ListMenu index={0} />
                    <ListMenu index={1} />
                    <ListMenu index={2} />
                    <ListMenu index={3} />
                    <ListMenu index={4} />
                    <ListMenu index={5} />
                    <ListMenu index={6} />
                    <ListMenu index={7} />
                    <ListMenu index={8} />
                    <ListMenu index={9} />
                </div>
                <ArrowForwardIosOutlined
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}
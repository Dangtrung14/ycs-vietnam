import "./post.css"
import { Link } from "react-router-dom"

export default function Post() {
    return (
        <>
            <div className='post'>
                <img
                    className="postImg"
                    src="https://cdn.pixabay.com/photo/2018/01/04/00/19/mountains-3059528_960_720.jpg"
                    alt=""
                />


                <div className="postInfo">
                    <div className="pastCats">
                        <span className="postCat"> MUSIC <span />              </span>
                        <span className="postCat"> LIFE <span />              </span>
                    </div>
                    <Link to='/post/:PostID'>
                        <span className="postTitle">
                            This is title of the post
                        </span>
                    </Link>
                    <hr />
                    <span className="postDate">
                        03rd, Marth, 2022
                    </span>
                    <p className="postDescription">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam cumque, eius minima laborum corporis illo quo labore ut corrupti. At necessitatibus sequi quo non ullam ad voluptatum fuga ab adipisci.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati enim neque nesciunt voluptas possimus suscipit, id excepturi odit tenetur est sit quibusdam esse error amet voluptate saepe sint quas eius.
                    </p>

                </div>
            </div>
        </>
    )
}

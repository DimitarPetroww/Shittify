import "./PlayButton.css"

import { ReactComponent as Play } from "../../svg/play.svg"
import { NavLink } from "react-router-dom"

const PlayButton = ({ category, id }) => {
    return (
        <div className="play-button-container">
            <NavLink to={`/details/${category}/${id}`}>
                <button className="play-button">
                    <Play />
                </button>
            </NavLink>
        </div>
    )
}

export default PlayButton
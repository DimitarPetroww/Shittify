import "./PlayButton.css"

import { NavLink } from "react-router-dom"

const PlayButton = () => {
    return (
        <div className="play-button-container">
            <NavLink to="/details/1">
                <button className="play-button">
                    <i className="fas fa-play"></i>
                </button>
            </NavLink>
        </div>
    )
}

export default PlayButton
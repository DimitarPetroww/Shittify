import "./PlayButton.css"

import { ReactComponent as Play} from "../../svg/play.svg"
import { NavLink } from "react-router-dom"

const PlayButton = () => {
    return (
        <div className="play-button-container">
            <NavLink to="/details/1">
                <button className="play-button">
                   <Play />
                </button>
            </NavLink>
        </div>
    )
}

export default PlayButton
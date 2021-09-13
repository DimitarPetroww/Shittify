import "./HomeButton.css"

import { ReactComponent as Sad } from "../../../svg/sad_face.svg"
import { ReactComponent as Happy } from "../../../svg/happy_face.svg"
import { NavLink, Route, Switch } from "react-router-dom"

const HomeButton = () => {
    return (
        <NavLink to="/"  exact className="home-button">
            <Switch>
                <Route path="/" exact>
                    <Happy className="home-button-logo" />
                </Route>
                <Route path="*" exact>
                    <Sad className="home-button-logo" />
                </Route>
            </Switch>

            <span className="home-button-text">Shittify</span>
        </NavLink >
    )
}
export default HomeButton
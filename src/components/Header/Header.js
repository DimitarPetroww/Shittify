import "./Header.css"
import { useState } from "react"
import { Route } from "react-router"
import MenuPopOut from "./MenuPopOut/MenuPopOut"
import ProfileMenu from "./ProfileMenu/ProfileMenu"
import LibraryNavigation from "./LibraryNavigation/LibraryNavigation"
import SearchNavigation from "./SearchNavigation/SearchNavigation"
import AuthButtons from "./AuthButtons/AuthButtons"
import HomeButton from "./HomeButton/HomeButton";
import AsidePopButton from "./AsidePopButton/AsidePopButton"

const Header = (props) => {
    const [isLogged, setIsLogged] = useState(false)
    const [isProfileClicked, setProfileClicked] = useState(false)

    const showPopMenu = () => {
        setProfileClicked(!isProfileClicked)
    }

    if (isLogged) {
        return (
            <header className="header">
                <AsidePopButton click={props.click} />
                <Route path="/library">
                    <LibraryNavigation />
                </Route>
                <Route path="/search" render={(props) => <SearchNavigation {...props} />}></Route>
                <ProfileMenu click={showPopMenu} isClicked={isProfileClicked} />
                {isProfileClicked ? <MenuPopOut click={showPopMenu} /> : ""}
            </header>
        )
    }
    return (
        <header className="header unauth">
            <HomeButton />
            <AuthButtons />
        </header>
    )
}
export default Header
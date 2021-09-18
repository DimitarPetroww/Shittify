import "./Header.css"
import { useState } from "react"
import { Route } from "react-router"
import { useSelector } from "react-redux"
import MenuPopOut from "./MenuPopOut/MenuPopOut"
import ProfileMenu from "./ProfileMenu/ProfileMenu"
import LibraryNavigation from "./LibraryNavigation/LibraryNavigation"
import SearchNavigation from "./SearchNavigation/SearchNavigation"
import AuthButtons from "./AuthButtons/AuthButtons"
import HomeButton from "./HomeButton/HomeButton";
import AsidePopButton from "./AsidePopButton/AsidePopButton"

const Header = (props) => {
    const user = useSelector(state => state.auth)
    const [isProfileClicked, setProfileClicked] = useState(false)

    const showPopMenu = () => {
        setProfileClicked(!isProfileClicked)
    }

    if (user) {
        return (
            <header className="header">
                <AsidePopButton click={props.click} />
                <Route path="/library">
                    <LibraryNavigation />
                </Route>
                <Route path="/search" render={(props) => <SearchNavigation {...props} />}></Route>
                <ProfileMenu click={showPopMenu} isClicked={isProfileClicked} username={user.username}/>
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
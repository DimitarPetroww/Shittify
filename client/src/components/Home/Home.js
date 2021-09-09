import Playlists from "../Playlists/Playlists"
import Songs from "../Songs/Songs"
import "./Home.css"


const Home = () => {
    return (
        <section className="home-container">
            <Playlists />
            <Songs />
        </section>
    );
}
export default Home
import "./Container.css"
import PlayButton from "../../PlayButton/PlayButton";
const Container = () => {
    return (
        <article className="container">
            <div className="container-img">
                <img src="https://i.ytimg.com/vi/Og5lDcadRtU/maxresdefault.jpg" alt="" />
            </div>
            <div className="container-content">
                <h3 className="container-content-title">Пиян 2005</h3>
                <p className="container-content-author">Борис Дали</p>
            </div>
            <PlayButton />
        </article>
    );
}
export default Container
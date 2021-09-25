import "./Container.css"
import PlayButton from "../../PlayButton/PlayButton";
const Container = ({category, data}) => {
    return (
        <article className="container">
            <div className="container-img">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="container-content">
                <h3 className="container-content-title">{data.name}</h3>
                <p className="container-content-author">{data.artist}</p>
            </div>
            <PlayButton category={category}/>
        </article>
    );
}
export default Container
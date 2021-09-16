import { useState, useEffect } from "react";
import "./Browse.css"
import Container from "./Container/Container"
const Wrapper = ({ match }) => {
    const [category, setCategory] = useState()

    useEffect(() => {
        let param = match.url.slice(match.url.lastIndexOf("/") + 1)
        param.includes("songs") ? setCategory("songs") : setCategory("playlists")
    }, [match.url])

    // if(match.url.startsWith("/library/")) {
    //     console.log("library");
    // }
    // if(match.url.startsWith("/search")) {
    //     console.log("search");
    // }
    return (
        <section className="wrapper">
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
            <Container category={category} />
        </section>
    )
}

export default Wrapper
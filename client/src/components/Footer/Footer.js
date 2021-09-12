import Player from "../Player/Player"
import "./Footer.css"

import { useState, useEffect } from "react";

const Footer = () => {
    const [songs, setSongs] = useState([
        {
            name: "Hugh Hefner",
            artist: "MILIONI",
            img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/hugh_kxjhje.jpg",
            src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438228/HotFlix/MILIONI_-_HUGH_HEFNER_Official_Music_Video_Prod._by_ev1ltw_zq6jlo.mp3"
        },
        {
            name: "Аромат на барут",
            artist: "PAMELA X FYRE",
            img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438255/HotFlix/fyre_wofwkf.jpg",
            src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438226/HotFlix/PAMELA_X_FYRE_-_%D0%90%D0%A0%D0%9E%D0%9C%D0%90%D0%A2_%D0%9D%D0%90_%D0%91%D0%90%D0%A0%D0%A3%D0%A2_Official_Music_Video_Prod._by_ev1ltw_lxjsj6.mp3"
        },
        {
            name: "Dolna kifla",
            artist: "Spens",
            img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438254/HotFlix/spens_ds7ofn.jpg",
            src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438229/HotFlix/SPENS_-_%D0%94%D0%9E%D0%9B%D0%9D%D0%90_%D0%9A%D0%98%D0%A4%D0%9B%D0%90_Official_HD_Video_w2tccq.mp3"
        },
        {
            name: "Black Cotton",
            artist: "2pac",
            img_src: "https://res.cloudinary.com/douwa5b0u/image/upload/v1631438254/HotFlix/2pac_huquxo.jpg",
            src: "https://res.cloudinary.com/douwa5b0u/video/upload/v1631438231/HotFlix/Black_Cotton_oudw2u.mp3"
        }
    ]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    return (
        <footer className="footer">
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs} />
        </footer>
    );
}
export default Footer
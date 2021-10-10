import "./Player.css"
import NowPlaying from "./NowPlaying/NowPlaying"
import Controls from "./Controls/Controls"
import { useEffect, useRef, useState } from "react"

const Player = ({ currentSongIndex, setCurrentSongIndex, songs, isPlaying, setIsPlaying }) => {
    const audio = useRef()
    const progress = useRef()
    const volume = useRef()
    const animation = useRef()
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [lastVolume, setLastVolume] = useState(0)
    const [isMuted, setIsMuted] = useState(false)

    const readAudioMeta = () => {
        const secs = Math.floor(audio.current.duration)
        setDuration(secs)
        progress.current.max = secs
    }
    useEffect(() => {
        if (isPlaying) {
            audio.current.play()
            animation.current = requestAnimationFrame(whilePlaying)
        } else {
            audio.current.pause()
            cancelAnimationFrame(animation.current)
        }
    })

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60)
        const seconds = Math.floor(secs % 60)

        return [
            minutes,
            seconds < 10 ? `0${seconds}` : seconds,
        ].join(":")
    }

    const changeRange = () => {
        audio.current.currentTime = progress.current.value
        changeCurrentTime()
    }
    const changeVolume = (value) => {
        setIsMuted(false)
        audio.current.volume = value / 100
        volume.current.style.setProperty("--width", `${value}%`)
    }
    const muteVolume = () => {
        setLastVolume(audio.current.volume)
        volume.current.value = 0
        changeVolume(0)
        setIsMuted(true)
    }
    const unmuteVolume = () => {
        volume.current.value = lastVolume * 100
        changeVolume(lastVolume * 100)
    }

    const forwardSong = () => {
        if (currentSongIndex + 1 > songs.length - 1) {
            setCurrentSongIndex(0)
        } else {
            setCurrentSongIndex(currentSongIndex + 1)
        }
    }
    const backwardSong = () => {
        if (currentSongIndex - 1 < 0) {
            setCurrentSongIndex(songs.length - 1)
        } else {
            setCurrentSongIndex(currentSongIndex - 1)
        }
    }
    const whilePlaying = () => {
        if (progress.current && audio.current && animation.current) {
            progress.current.value = audio.current.currentTime;
            changeCurrentTime()
            animation.current = requestAnimationFrame(whilePlaying)
        }
    }
    const changeCurrentTime = () => {
        progress.current.style.setProperty("--width", `${(progress.current.value / duration) * 100}%`)
        setCurrentTime(progress.current.value)
    }


    return (
        <section className="player">
            <audio ref={audio} src={songs[currentSongIndex].audio} onEnded={(e) => {if(songs.length === 1) return setIsPlaying(false); forwardSong()}} onLoadedMetadata={readAudioMeta}></audio>
            <NowPlaying song={songs[currentSongIndex]} />
            <Controls
                isMuted={isMuted}
                mute={muteVolume}
                unmute={unmuteVolume}
                onProgressChange={changeRange}
                progress={progress}
                volume={volume}
                onVolumeChange={() => changeVolume(volume.current.value)}
                currentTime={calculateTime(currentTime)}
                duration={isNaN(duration) ? "0:00" : calculateTime(duration)}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                forwardSong={forwardSong}
                backwardSong={backwardSong}
            />
        </section>
    );
}

export default Player
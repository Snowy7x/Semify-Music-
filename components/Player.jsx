import React, { useState, useEffect, useRef } from 'react'
import styles from "../styles/components/player.module.css";
import { BsPauseFill, BsCaretRightFill, BsSkipEndFill, BsSkipStartFill } from "react-icons/bs"

export const LPlayer = ({track, setTrack, currentTime, setCurrentTime}) => {
  
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const progressFill = useRef(null);
  const progressThumb = useRef(null);

  const onMouseEnter = () => {
    progressThumb.current.style.display = "block";
  }

  const onMouseLeave = () => {
    progressThumb.current.style.display = "none";
  }

  const onCanPlayThrough = () => {
    console.log("onCanPlayThrough", audioRef.current.duration);
    setDuration(audioRef.current.duration);
  }

  const changeTrack = (track) => {
    setProgress(0);
    setCurrentTime(0);
    setPlaying(true);
    audioRef.current.src = track.audio;
    audioRef.current.play();
  }
  useEffect(() => {
    if (track) {
      changeTrack(track);
    }
  }, [track]);

  useEffect(() => {
    console.log("useEffect progress", progress * 100);
    progressFill.current.style.width = `${progress * 100}%`;
    progressThumb.current.style.left = `${progress * 100}%`;
  }, [progress]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
  }, [audioRef.current]);

  const handleTimeUpdate = () => {
    setProgress(audioRef.current.currentTime / audioRef.current.duration);
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleProgressChange = (e) => {
    const width = progressRef.current.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const progress = clickX / width;
    audioRef.current.currentTime = duration * progress;
    setProgress(progress);
  };

  const handlePlayClick = () => {
    setPlaying(!playing);
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handlePrevClick = () => {
    const prevTrack = tracks[max(0, tracks.indexOf(track) - 1)];
    if (prevTrack) {
      changeTrack(prevTrack);
    }
  };

  const handleNextClick = () => {
    const nextTrack = tracks[min(0, tracks.indexOf(track) + 1)];
    if (nextTrack) {
      changeTrack(nextTrack);
    }
  };



  return (
    <div className={styles.player}>
      <audio ref={audioRef} onCanPlayThrough={() => onCanPlayThrough()} />
      <div className={styles.progress_bar}>
      <div className={styles.duration_line} ref={progressRef} onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()} onClick={handleProgressChange}>
        <div className={styles.duration_line_fill} ref={progressFill} />
        <div className={styles.duration_line_thumb} ref={progressThumb} />
      </div>
      </div>
      <div className={styles.player_card}>
        <img className={styles.player_card_image} src={`/covers/${track?.img}`} alt=""/>
        <div className={styles.player_controls}>
          <BsSkipStartFill className={styles.player_controls_icon}/>
          {
            playing ?
            <BsPauseFill className={styles.player_controls_icon} onClick={handlePlayClick}/> :
            <BsCaretRightFill className={styles.player_controls_icon} onClick={handlePlayClick}/>
          }
          <BsSkipEndFill className={styles.player_controls_icon}/>
        </div>
      </div>
      <div className={styles.player_desc}>
        <div>Song: <a>{track?.title}</a></div>
        <div>Artist: <a>{track?.artist}</a></div>
      </div>
    </div>
  )
}

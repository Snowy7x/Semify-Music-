import { useState, useEffect } from "react";
import styles from "../styles/Cat.module.css";
import { TiHomeOutline } from "react-icons/ti";
import { BsSearch } from "react-icons/bs";
import { VscLibrary, VscDiffAdded } from "react-icons/vsc";
import { LPlayer } from "../components/Player";

import { BsCaretRightFill } from "react-icons/bs";

import { useRouter } from "next/router";
import tracks from "../pages/api/tracks";

export default function Cat() {
  const router = useRouter();

  const [currentTime, setCurrentTime] = useState(0);
  const [track, setTrack] = useState(null);

  useEffect(() => {
    if (!track) {
      if (tracks.length > 0) {
        //changeTrack(tracks[0]);
        setTrack(tracks[0]);
      }
    }
  }, [track]);

  const Page = () => {
    switch (this.props.page) {
      case "home":
        return <div />;
      case "search":
        return <div />;
      case "library":
        return <div />;
      default:
        return <div />;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={`${styles.item} ${styles.active}`}>
          <div className={styles.item_icon}>
            <TiHomeOutline />
          </div>
          <div className={styles.item_title}>
            <h1>Home</h1>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_icon}>
            <BsSearch />
          </div>
          <div className={styles.item_title}>
            <h1>Search</h1>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_icon}>
            <VscLibrary />
          </div>
          <div className={styles.item_title}>
            <h1>Collection</h1>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.item_icon}>
            <VscDiffAdded />
          </div>
          <div className={styles.item_title}>
            <h1>Add a song</h1>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.songs_container}>
          {/* loop throw the tracks */}
          {tracks.map((track, index) => (
            <div key={index} className={styles.song}>
              <div className={styles.song_play_btn} onClick={() => {
                setTrack(track);
                console.log("changed track to: ", index);
              }}>
                <BsCaretRightFill />
              </div>
              <img
                src={"/covers/"+track.img}
                className={styles.song_img}
              ></img>
              <div className={styles.song_info}>
                <h2 className={styles.song_title}>{track.title}</h2>
                <p className={styles.song_title}>{track.artist}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.player}>
          <LPlayer track={track} setTrack={setTrack} currentTime={currentTime} setCurrentTime={setCurrentTime}/>
        </div>
      </div>
    </div>
  );
}

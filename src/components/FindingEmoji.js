import React, { useState } from "react";
import Picker from "emoji-picker-react";
import styles from "./FindingEmoji.module.css";

const FindingEmoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div className={styles.main}>
      <h1>Emoji Picker ✨</h1>
      <div className={styles.main1}>
        <div className={styles.select}>Select an Emoji</div>
        <div className={styles.box}> 
          <Picker onEmojiClick={onEmojiClick} />
          {chosenEmoji && <EmojiData chosenEmoji={chosenEmoji} />}
        </div>
      </div>
    </div>
  
  );
};

const EmojiData = ({ chosenEmoji }) => (
  <div className={styles.content}>
    <div>Name: {chosenEmoji.names}</div>
    <br></br>
    <div>Emoji: {chosenEmoji.emoji}</div>
  </div>
);

export default FindingEmoji;

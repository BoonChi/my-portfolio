import React from "react";
import BeepSound from "../../public/beep.mp3";
const PlayAudio = () => {
  return (
    <div>
      <audio src={BeepSound} controls autoPlay />
    </div>
  );
};

export default PlayAudio;

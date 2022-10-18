import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props);
  if (props.phonetic.audio === "") {
    return null;
  } else {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer src={props.phonetic.audio}  controls />
        <br />
        {props.phonetic.text}
      </div>
    );
  }
}

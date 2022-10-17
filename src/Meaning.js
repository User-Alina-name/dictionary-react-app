import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definitions:</strong>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <em>{definition.example}</em>
            <strong>
              <Synonyms synonyms={definition.synonyms} />
            </strong>
          </div>
        );
      })}
    </div>
  );
}

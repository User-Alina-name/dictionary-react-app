import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definitions:</strong>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <section>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <strong>
                <Synonyms synonyms={definition.synonyms} />
              </strong>
            </section>
          </div>
        );
      })}
    </div>
  );
}

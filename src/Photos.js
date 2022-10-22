import React from "react";

export default function Photos(props) {
  console.log(props);
  if (props.photos.length) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="row" key={index}>
              <a
                href={photo.src.original}
                title="Open full picture meaning for a word from a dictionary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
                  title="Picture meaning for a word from a dictionary"
                  className="img-fluid"
                  alt={photo.photographer}
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}

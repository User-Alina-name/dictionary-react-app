import React from "react";

export default function Photos(props) {
  if (props.photos.length) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="row" key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={photo.src.landscape}
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

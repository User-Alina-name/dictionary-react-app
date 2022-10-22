import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    setResults(response.data[0]);

    let pexelsApiKey =
      "563492ad6f91700001000001e38d77db2ac64ad8a788da20115919ba";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=20`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary</h1>
        <div className="row">
          <div className="col-8">
            <section>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  title="Type for search any words"
                  placeholder="Search..."
                  autoFocus={true}
                  className="form-control"
                  onChange={handleKeywordChange}
                />
              </form>
            </section>
            <Results results={results} />
          </div>
          <div className="col-4">
            <Photos photos={photos} />
          </div>
        </div>
        <footer className="footer">
          Coded by
          <a
            href="mailto:pismenna.alina18@gmail.com"
            title="Link email address by front-end developer Alina Pysmenna"
          >
            {" "}
            Alina Pysmenna,{" "}
          </a>
          open source code on
          <a
            href="https://github.com/User-Alina-name/dictionary-react-app"
            target="_blank"
            rel="noopener noreferrer"
            title="Git-hub link Dictionary site with open source by front-end developer Alina Pysmenna"
          >
            {" "}
            Git-Hub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://app.netlify.com/sites/dictionary-react-by-alina-pysmenna/overview"
            target="_blank"
            rel="noopener noreferrer"
            title="Netlify link Dictionary by front-end developer Alina Pysmenna"
          >
            {" "}
            Netlify.
          </a>
        </footer>
      </div>
    );
  } else {
    load();
    return "loading";
  }
}

import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] =useState(false);
    let [photos, setPhotos] =useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function displayPexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        //documentation = https://dictionaryapi.dev/
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        const pexelsApiKey = "563492ad6f91700001000001bb77275a5ea44eceb6658854a019ff59";
        const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = { Authorization : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers }).then(displayPexelsResponse);
    }

    function handleSearch(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();

    }

    if (loaded) {
    return (
    <div className="Dictionary">
        <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSearch} >
        <input type="search" onChange={handleKeywordChange} class="form-control form-control-lg" aria-label="form-control-lg example" placeholder="Search for a word..." />
        </form>
        <p class="hint">
            Sugestions: sunset, kayak, forest, tennis...
        </p>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
    </div>
    );
  } else {
      return load();
  }
}
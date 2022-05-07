import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetic">
            <span className="text">{props.phonetic.text}</span>
        </div>
    )
}
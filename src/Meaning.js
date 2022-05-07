import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function(definition, index){
            return (
                <div key={index}>
                    <p>
                    <strong>Definition:</strong> {definition.definition}<br />
                    <em><strong> {definition.example}</strong></em> 
                    <br /> 
                    <Synonyms synonyms={definition.synonyms} />
                    </p>
                    </div>
                 );
            })}
        </div>
    );
}
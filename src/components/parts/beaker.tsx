import React, { useState } from "react";
import beakerImg from '../../beaker.png'

export default function BeakerParts() {
    const chemicalSubstances = {
        name: "HCl",
        molecular: 36,
    };

    const [beakerContent, setBeakerContent] = useState({
        name : "a",
        molecular: 0,
    })

    const getBeakerContents = () => {
        setBeakerContent({ ...beakerContent, name: chemicalSubstances.name, molecular: chemicalSubstances.molecular});
    };

    return (
        <>
            <button onClick={getBeakerContents}>
                <img src={beakerImg}></img>
            </button>
            <ul>
                <li>物質: {beakerContent.name}</li>
                <li>分子量: {beakerContent.molecular}</li>
            </ul>
        </>
    );
}
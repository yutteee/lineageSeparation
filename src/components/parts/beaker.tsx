import React, {useState} from "react";
import beakerImg from '../../beaker.png'

interface chemicalSubstanceProps {
    name: string
    molecular: number
    isSelected: () => void
}


const BeakerParts: React.FC<chemicalSubstanceProps> = (props) => {
    return (
        <>
            <button onClick={props.isSelected}>
                <img src={beakerImg}></img>
            </button>
            <ul>
                <li>物質: {props.name}</li>
                <li>分子量: {props.molecular}</li>
            </ul>
        </> 
    )
}

export default BeakerParts;
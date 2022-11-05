import React, { useState } from "react";
import BeakerParts from '../parts/beaker';

const LabInstruments = () => {
    const chemicalSubstances = {...{
        name: "HCl",
        molecular: 36,
    }};

    const [beakerContent, setBeakerContent] = useState({
        name : "a",
        molecular: 0,
    })

    const getBeakerContents = () => {
        setBeakerContent({ ...beakerContent, name: chemicalSubstances.name, molecular: chemicalSubstances.molecular});
    };

    return (
        <BeakerParts
            name={beakerContent.name}
            molecular={beakerContent.molecular}
            isSelected={getBeakerContents}
        ></BeakerParts>
    );
}

export default LabInstruments;
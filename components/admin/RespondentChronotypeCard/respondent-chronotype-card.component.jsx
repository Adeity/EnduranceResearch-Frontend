import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { formatTime } from '/utils/time-format';
import { getChronotypeId, getChronotypeString } from '/model/chronotype-enum'



const RespondentChronotypeCardComponent = ({chronotypeData, chronotypeValue, chronotypeHandler, computation}) => {

    const [ selectedType, setSelectedType ] = useState(chronotypeData[getChronotypeId(chronotypeValue)]);
    const [ selectedIndex, setSelectedIndex ] = useState(getChronotypeId(chronotypeValue));

    const onChangeHandler = (event) => {
        setSelectedIndex(event.target.value);
        setSelectedType(chronotypeData[event.target.value]);
        chronotypeHandler(getChronotypeString(event.target.value))
    }

    useEffect(() => {
        setSelectedType(chronotypeData[selectedIndex]);
    }, [chronotypeData, chronotypeValue]);

    return(
        <Form.Group className="mb-3">
            <Form.Label>Hodnoty Chronotypu</Form.Label>
            <Form.Select onChange={ onChangeHandler } defaultValue={selectedIndex}>
                { chronotypeData.map(type => {
                        return <option value={type.id} key={type.id}>{type.title}</option>
                    }) 
                }
            </Form.Select>

            <Form.Label>Interval vstávání</Form.Label>
            <Form.Group className="mb-3 subfield">
                <Form.Control value={formatTime(computation.chronoAwakeFrom)} className="halfWidth" type="text" disabled={true}/>
                <Form.Control value={formatTime(computation.chronoAwakeTo)} className="halfWidth" type="text" disabled={true}/>
            </Form.Group>


            <Form.Label>Interval usínání</Form.Label>
            <Form.Group className="mb-3 subfield">
                <Form.Control value={formatTime(computation.chronoSleepFrom)} className="halfWidth" type="text" disabled={true}/>
                <Form.Control value={formatTime(computation.chronoSleepTo)} className="halfWidth" type="text" disabled={true}/>
            </Form.Group>
        </Form.Group>
    )
}

export default RespondentChronotypeCardComponent;
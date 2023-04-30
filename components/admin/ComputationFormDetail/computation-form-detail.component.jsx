import { Col, Row, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { formatTimeWithYear, formatTime } from '/utils/time-format.js'
import { getRespondentComputationData } from '/services/respondent-data.service.js'
import { getChronoVsRythmValueText } from '/model/chrono-vs-rythm'
import { getChronotype, getChronotypeTitle } from '/model/chronotype-enum'

import RespondentChronotypeCardComponent from '../RespondentChronotypeCard/respondent-chronotype-card.component';
import './computation-form-detail.styles.css'


const ComputationFormDetailComponent = ({ computation, backClickHandler, saveClickedHandler, respDataUpdateHandler }) => {

    const [ socJetlagThreshold, setSocJetlagThreshold ] = useState(computation.socJetlagThreshold)
    const [ latencyFaThreshold, setLatencyFaThreshold ] = useState(computation.latencyFaThreshold)
    const [ userId, setUserId ] = useState(undefined)

    let currentReportValueState = structuredClone(computation);

    useState(() => {
        currentReportValueState = structuredClone(computation);
    }, [computation]);

    // useEffect(() => {
    //     getRespondentComputationData(computation.personId)
    //         .then(response => {
    //             setUserId(response.userId);
    //             setSocJetlagThreshold(response.socJetlagThreshold);
    //             setLatencyFaThreshold(response.latencyFaThreshold);
    //         })
    // }, [])

    const onSaveComputationClick = () => {
        computation = structuredClone(currentReportValueState) 
        saveClickedHandler(computation)
    }

    const onSaveDataClick = () => {
            const updatedVal = { userId: userId, socJetlagThreshold: socJetlagThreshold, latencyFaThreshold: latencyFaThreshold}
            respDataUpdateHandler(updatedVal)    
    }

    return(
        
        <Form>
            <Row>
                <Col>   
                    <Button onClick={backClickHandler}>Back</Button>
                </Col>
                <Col xs={3}>
                    <h1>Spánek</h1>
                </Col>
                <Col xs={3}>
                    <h2>{ computation.title }</h2>
                </Col>
                <Col xs={3}>
                    <h2>{ formatTimeWithYear(computation.uploaded)}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RespondentChronotypeCardComponent computation={computation} socJetlagThreshold={socJetlagThreshold} latencyFaThreshold={latencyFaThreshold}/>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Chronotyp vs Rytmus - vstávání:</b> { getChronoVsRythmValueText(computation.wakingRythm)} </Form.Label>
                        <Form.Control readOnly type="text" defaultValue={computation.wakingRythmText} onChange={(e) => {currentReportValueState.wakingRythmText = e.target.value}}/>

                        <Form.Label><b>Chronotyp vs Rytmus - usínání:</b> { getChronoVsRythmValueText(computation.fallingAsleepRythm) }</Form.Label>
                        <Form.Control type="text" defaultValue={computation.fallingAsleepRythmText} onChange={(e) => {currentReportValueState.fallingAsleepRythmText = e.target.value}}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={9} />
                <Col>
                    <Button className="save-button" onClick={onSaveComputationClick}>Uložit Texty</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default ComputationFormDetailComponent;
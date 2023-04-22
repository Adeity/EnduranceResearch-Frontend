import { Col, Row, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { formatTimeWithYear, formatTime } from '/utils/time-format.js'
import { getRespondentComputationData } from '/services/respondent-data.service.js'

import { getChronotype, getChronotypeTitle } from '/model/chronotype-enum'

import RespondentChronotypeCardComponent from '../RespondentChronotypeCard/respondent-chronotype-card.component';
import './computation-form-detail.styles.css'


const ComputationFormDetailComponent = ({ computation, backClickHandler, saveClickedHandler, respDataUpdateHandler }) => {

    const [ socJetlagThreshold, setSocJetlagThreshold ] = useState("01:00")
    const [ latencyFaThreshold, setLatencyFaThreshold ] = useState(30)
    const [ userId, setUserId ] = useState(undefined)

    let currentReportValueState = structuredClone(computation);

    useState(() => {
        currentReportValueState = structuredClone(computation);
    }, [computation]);

    useEffect(() => {
        getRespondentComputationData(computation.personId)
            .then(response => {
                setUserId(response.userId);
                setSocJetlagThreshold(response.socJetlagThreshold);
                setLatencyFaThreshold(response.latencyFaThreshold);
            })
    }, [])

    const reportChronotypeValueHandler = (chronoValue) => {
        currentReportValueState.chronotype = chronoValue;
    }

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
                    {/* <RespondentChronotypeCardComponent chronotypeData={chronotypeData} chronotypeValue={report.chronotype} chronotypeHandler={ reportChronotypeValueHandler } computation={report}/> */}
                    <p>Chronotyp:{ getChronotypeTitle(computation.chronotype) }</p>
                    <p>Vstává od {formatTime(computation.chronoAwakeFrom)} do {formatTime(computation.chronoAwakeTo)}.</p>
                    <p>Chodí spát od: {formatTime(computation.chronoSleepFrom)} do {formatTime(computation.chronoSleepTo)}.</p>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Chronotyp vs Rytmus - vstávání</Form.Label>
                        <Form.Control type="text" defaultValue={computation.wakingRythmText} onChange={(e) => {currentReportValueState.wakingRythmText = e.target.value}}/>

                        <Form.Label>Chronotyp vs Rytmus - usínání</Form.Label>
                        <Form.Control type="text" defaultValue={computation.fallingAsleepRythmText} onChange={(e) => {currentReportValueState.fallingAsleepRythmText = e.target.value}}/>

                        <div className='subfield'>
                            {/* <Form.Label className='edit-line-label'>Latence usnutí je větší než:</Form.Label> */}
                            <Form.Check className="checkbox" type="checkbox" label="Latence usnutí je větší než:" defaultChecked={computation.latency} onChange={(e) => {currentReportValueState.latency = e.target.checked}}/>
                            <Form.Control type="text" className='short-value' value={latencyFaThreshold} onChange={(e) => setLatencyFaThreshold(e.target.value)}/>
                            <Form.Control type="text" className='thresholdText' defaultValue={computation.latencyText} onChange={(e) => {currentReportValueState.latencyText = e.target.value}}/>
                        </div>

                        <div className='subfield'>
                            <Form.Check className="checkbox" type="checkbox" label="Sociální jetlag je větší než:" defaultChecked={computation.jetlagBiggerThanX} onChange={(e) => {currentReportValueState.jetlagBiggerThanX = e.target.checked}}/>
                            <Form.Control type="text" className='short-value' value={ socJetlagThreshold } onChange={(e) => setSocJetlagThreshold(e.target.value) }/>
                            <Form.Control type="text" className='thresholdText' defaultValue={computation.jetlagBiggerThanXText} onChange={(e) => {currentReportValueState.jetlagBiggerThanXText = e.target.value}}/>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col xs={9} />
                <Col>
                    <Button className="save-button" onClick={onSaveComputationClick}>Uložit Výpočet</Button>
                </Col>
                <Col>
                    <Button className="save-button" onClick={onSaveDataClick}>Uložit Data</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default ComputationFormDetailComponent;
import { Col, Row, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { formatTimeWithYear, formatTime } from '/utils/time-format.js'
import { getRespondentComputationData } from '/services/respondent-data.service.js'
import { getChronoVsRythmValueText } from '/model/chrono-vs-rythm'

import RespondentChronotypeCardComponent from '../RespondentChronotypeCard/respondent-chronotype-card.component';
import './computation-device-detail.styles.css'

const  ComputationDeviceDetail = ({ computation, backClickHandler, saveClickedHandler, respDataUpdateHandler }) => {

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
                    <RespondentChronotypeCardComponent computation={computation}/>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Chronotyp vs Rytmus volné dny - vstávání:</b> { getChronoVsRythmValueText(computation.wakingRythmFreeDays)} </Form.Label>
                        <Form.Control type="text" defaultValue={computation.wakingRythmFreeDaysText} onChange={(e) => {currentReportValueState.wakingRythmFreeDaysText = e.target.value}}/>

                        <Form.Label><b>Chronotyp vs Rytmus volné dny - usínání:</b> { getChronoVsRythmValueText(computation.fallingAsleepRythmFreeDays) }</Form.Label>
                        <Form.Control type="text" defaultValue={computation.fallingAsleepRythmFreeDaysText} onChange={(e) => {currentReportValueState.fallingAsleepRythmFreeDaysText = e.target.value}}/>
                        
                        <Form.Label><b>Chronotyp vs Rytmus pracovní dny - vstávání:</b> { getChronoVsRythmValueText(computation.wakingRythmWorkDays)} </Form.Label>
                        <Form.Control type="text" defaultValue={computation.wakingRythmWorkDaysText} onChange={(e) => {currentReportValueState.wakingRythmWorkDaysText = e.target.value}}/>

                        <Form.Label><b>Chronotyp vs Rytmus pracovní dny - usínání:</b> { getChronoVsRythmValueText(computation.fallingAsleepRythmWorkDays) }</Form.Label>
                        <Form.Control type="text" defaultValue={computation.fallingAsleepRythmWorkDaysText} onChange={(e) => {currentReportValueState.fallingAsleepRythmWorkDaysText = e.target.value}}/>

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

export default ComputationDeviceDetail;
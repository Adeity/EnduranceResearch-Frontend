import { Col, Row, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { formatTimeWithYear, formatTime } from '/utils/time-format.js'
import { getRespondentComputationData } from '/services/respondent-data.service.js'
import { getChronoVsRythmValueText } from '/model/chrono-vs-rythm'

import RespondentChronotypeCardComponent from '../RespondentChronotypeCard/respondent-chronotype-card.component';
import './computation-device-detail.styles.css'

const  ComputationDeviceDetail = ({ computation, backClickHandler, saveClickedHandler, respDataUpdateHandler }) => {

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
                <Col xs={4}>
                    <h2>{ computation.title } {computation.version} {computation.recalculations === 0 ? "" : computation.recalculations }</h2>
                </Col>
                <Col xs={3}>
                    <h2>{ formatTimeWithYear(computation.uploaded)}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RespondentChronotypeCardComponent computation={computation} socJetlagThreshold={socJetlagThreshold} latencyFaThreshold={latencyFaThreshold}/>
                    
                    <Form.Label>Latence usnutí <b>{ computation.latency }</b> (z dotazníku PSQI) je <b>{ computation.latencyFaGreater ? "VĚTŠÍ" : "MENŠÍ" }</b> než hranice <b>{latencyFaThreshold}</b>.</Form.Label>
                    <Form.Control type="text" defaultValue={computation.latencyText} onChange={(e) => {currentReportValueState.latencyText = e.target.value}}/>

                    <Form.Label>Sociální jetlag <b>{ computation.socJetlag }</b> je <b>{ computation.jetlagBiggerThanX ? "VĚTŠÍ" : "MENŠÍ ROVNO" }</b> než hranice <b>{ socJetlagThreshold }</b>.</Form.Label>
                    <Form.Control type="text" defaultValue={computation.jetlagBiggerThanXText} onChange={(e) => {currentReportValueState.jetlagBiggerThanXText = e.target.value}}/>

                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Chronotyp vs Rytmus volné dny - vstávání:</b> {computation.avgFallAsleepTimeWorkDays} { getChronoVsRythmValueText(computation.wakingRythmFreeDays)} </Form.Label>
                        <Form.Control type="text" defaultValue={computation.wakingRythmFreeDaysText} onChange={(e) => {currentReportValueState.wakingRythmFreeDaysText = e.target.value}}/>

                        <Form.Label><b>Chronotyp vs Rytmus volné dny - usínání:</b> {computation.avgWakingTimeWorkDays} { getChronoVsRythmValueText(computation.fallingAsleepRythmFreeDays) }</Form.Label>
                        <Form.Control type="text" defaultValue={computation.fallingAsleepRythmFreeDaysText} onChange={(e) => {currentReportValueState.fallingAsleepRythmFreeDaysText = e.target.value}}/>
                        
                        <Form.Label><b>Chronotyp vs Rytmus pracovní dny - vstávání:</b> {computation.avgFallAsleepTimeFreeDays} { getChronoVsRythmValueText(computation.wakingRythmWorkDays)} </Form.Label>
                        <Form.Control type="text" defaultValue={computation.wakingRythmWorkDaysText} onChange={(e) => {currentReportValueState.wakingRythmWorkDaysText = e.target.value}}/>

                        <Form.Label><b>Chronotyp vs Rytmus pracovní dny - usínání:</b> {computation.avgWakingTimeFreeDays} { getChronoVsRythmValueText(computation.fallingAsleepRythmWorkDays) }</Form.Label>
                        <Form.Control type="text" defaultValue={computation.fallingAsleepRythmWorkDaysText} onChange={(e) => {currentReportValueState.fallingAsleepRythmWorkDaysText = e.target.value}}/>
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

export default ComputationDeviceDetail;
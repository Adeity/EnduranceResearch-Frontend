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
                    <Button onClick={backClickHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-backspace margin-right" viewBox="0 0 16 16">
                            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                        </svg>
                        Zpět
                    </Button>
                </Col>
                <Col>
                    <h2>{ computation.title } {computation.version} {computation.recalculations === 0 ? "" : "(" + computation.recalculations + ")" }</h2>
                </Col>
                <Col>
                    <h2>{ formatTimeWithYear(computation.uploaded)}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <RespondentChronotypeCardComponent computation={computation} socJetlagThreshold={socJetlagThreshold} latencyFaThreshold={latencyFaThreshold}/>
                    
                    <Form.Label><b>Latence usnutí</b> { computation.latency } (z dotazníku PSQI) je { computation.latencyFaGreater ? "VĚTŠÍ" : "MENŠÍ" } než hranice {latencyFaThreshold}.</Form.Label>
                    <Form.Control type="text" defaultValue={computation.latencyText} onChange={(e) => {currentReportValueState.latencyText = e.target.value}}/>

                    <Form.Label><b>Sociální jetlag</b> { computation.socJetlag } je { computation.jetlagBiggerThanX ? "VĚTŠÍ" : "MENŠÍ ROVNO" } než hranice { socJetlagThreshold }.</Form.Label>
                    <Form.Control type="text" defaultValue={computation.jetlagBiggerThanXText} onChange={(e) => {currentReportValueState.jetlagBiggerThanXText = e.target.value}}/>

                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label><b>Průměrný čas vstávání - volné dny:</b> {computation.avgWakingTimeFreeDays} <b>/ Vhledem k oknu</b>: { getChronoVsRythmValueText(computation.wakingRythmFreeDays)} </Form.Label>
                        <Form.Control type="text" defaultValue={computation.wakingRythmFreeDaysText} onChange={(e) => {currentReportValueState.wakingRythmFreeDaysText = e.target.value}}/>

                        <Form.Label><b>Průměrný čas usínání - volné dny:</b>  {computation.avgFallAsleepTimeFreeDays} <b>/ Vhledem k oknu</b>: { getChronoVsRythmValueText(computation.fallingAsleepRythmFreeDays) }</Form.Label>
                        <Form.Control type="text" defaultValue={computation.fallingAsleepRythmFreeDaysText} onChange={(e) => {currentReportValueState.fallingAsleepRythmFreeDaysText = e.target.value}}/>
                        
                        <Form.Label><b>Průměrný čas vstávání - pracovní dny:</b> {computation.avgWakingTimeWorkDays} <b>/ Vhledem k oknu</b>: { getChronoVsRythmValueText(computation.wakingRythmWorkDays)} </Form.Label>
                        <Form.Control type="text" defaultValue={computation.wakingRythmWorkDaysText} onChange={(e) => {currentReportValueState.wakingRythmWorkDaysText = e.target.value}}/>

                        <Form.Label><b>Průměrný čas usínání - pracovní dny:</b> {computation.avgFallAsleepTimeWorkDays} <b>/ Vhledem k oknu</b>: { getChronoVsRythmValueText(computation.fallingAsleepRythmWorkDays) }</Form.Label>
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
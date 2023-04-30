import { useState } from 'react';
import { Row, Col, Accordion, Form, Button } from 'react-bootstrap';
import { exportToExcel } from '/services/excel.service'
import { formatTimeWithYear } from '/utils/time-format.js'

import ComputationUserDataEdit from '../ComputationUserDataEdit/computation-user-data-edit.component';
import './participant-card.styles.css'

const ParticipantCard = ( {participantData, valueSelectHandler, respDataUpdateHandler}) => {

    return (
        <Accordion className='accordion-margin'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Col xs={8}>
                        { participantData.id }
                    </Col>
                    <Col xs={1}>
                        <div className='button-like bg-primary text-white'
                            onClick={(e) => {
                                e.stopPropagation();
                                // pop modal and display data
                            }}
                        >Souhrn</div>
                    </Col>
                    <Col xs={2}>
                        <div className='button-like bg-primary text-white'
                            onClick={(e) => {
                                e.stopPropagation();
                                exportToExcel(participantData.id);
                            }}
                        >
                            Export do excelu
                        </div>
                    </Col>
                </Accordion.Header>

                <Accordion.Body>
                    <Row>
                        <ComputationUserDataEdit 
                            researchNumber={participantData.id}
                            sjlThreshold={participantData.socJetlagThreshold} 
                            latThreshold={participantData.latencyFaThreshold}
                            respDataUpdateHandler={respDataUpdateHandler}
                            />
                    </Row>
                    <hr className='divider'/>
                    <Row>
                        <Col><p>Title</p></Col>
                        <Col><p>Verze</p></Col>
                        <Col><p>Přepočítání</p></Col>
                        <Col><p>Uploaded</p></Col>
                        <Col><p>Last Modified</p></Col>
                    </Row>
                    <hr className='divider'/>
                    {
                        participantData.formComputations.map(computation =>  
                            <Row key={computation.id} onClick={() => valueSelectHandler(computation)} className="clickable">
                                <Col><p>{ computation.title } </p></Col>
                                <Col><p>{ computation.version }</p></Col>
                                <Col><p>{ computation.recalculations === 0 ? "-" : computation.recalculations }</p></Col>
                                <Col><p>{ formatTimeWithYear(computation.uploaded).toString() } </p></Col>
                                <Col><p>{ formatTimeWithYear(computation.lastModified).toString() } </p></Col>
                            </Row>
                        )
                    }          
                    <hr className='divider'/>
                    {
                        participantData.deviceComputations.map(computation =>  
                            <Row key={computation.id} onClick={() => valueSelectHandler(computation)} className="clickable">
                                <Col><p>{ computation.title } </p></Col>
                                <Col><p>{ computation.version }</p></Col>
                                <Col><p>{ computation.recalculations === 0 ? "-" : computation.recalculations }</p></Col>
                                <Col><p>{ formatTimeWithYear(computation.uploaded).toString() } </p></Col>
                                <Col><p>{ formatTimeWithYear(computation.lastModified).toString() } </p></Col>
                            </Row>
                        )
                    }  
      
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ParticipantCard;
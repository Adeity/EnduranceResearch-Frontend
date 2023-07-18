import { useState } from 'react';
import { Row, Col, Accordion, Form, Button } from 'react-bootstrap';
import { exportToExcel } from '/services/excel.service'
import { formatTimeWithYear } from '/utils/time-format.js'

import ComputationUserDataEdit from '../ComputationUserDataEdit/computation-user-data-edit.component';
import './participant-card.styles.css'

const ParticipantCard = ( {participantData, valueSelectHandler, respDataUpdateHandler}) => {

    const onComputationSelect = (computation) => {
        valueSelectHandler(computation)
        setOpenedParticipant(participantData.id)
    }

    return (
        <Accordion className='accordion-margin'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Col xs={8}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-circle margin-right" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-filetype-xlsx" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM7.86 14.841a1.13 1.13 0 0 0 .401.823c.13.108.29.192.479.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.002 1.002 0 0 0-.375-.357 2.028 2.028 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.093 1.093 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.777.15-.224.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.558.558 0 0 1-.255.193c-.111.047-.25.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.249-.115.578.578 0 0 1-.255-.384h-.764Zm-3.726-2.909h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415H1.5l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Zm1.923 3.325h1.697v.674H5.266v-3.999h.791v3.325Zm7.636-3.325h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                            </svg>
                            Export do xlsx
                        </div>
                    </Col>
                </Accordion.Header>

                <Accordion.Body>
                    <Row>
                        <ComputationUserDataEdit className="margin-top"
                            researchNumber={participantData.id}
                            sjlThreshold={participantData.socJetlagThreshold} 
                            latThreshold={participantData.latencyFaThreshold}
                            respDataUpdateHandler={respDataUpdateHandler}
                            />
                    </Row>
                    <hr className='divider'/>
                    <Row>
                        <Col><p>Název</p></Col>
                        <Col><p>Verze</p></Col>
                        <Col><p>Přepočítání</p></Col>
                        <Col><p>Nahráno</p></Col>
                        <Col><p>Upraveno</p></Col>
                    </Row>
                    <hr className='divider'/>
                    {
                        participantData.formComputations.map(computation =>  
                            <Row key={computation.id} onClick={() => valueSelectHandler(computation)} className="clickable clickable-respondent">
                                <Col>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-file-earmark-ruled margin-right" viewBox="0 0 16 16">
                                        <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h7v1a1 1 0 0 1-1 1H6zm7-3H6v-2h7v2z" />
                                    </svg>
                                    { computation.title }
                                </Col>
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
                            <Row key={computation.id} onClick={() => valueSelectHandler(computation)} className="clickable clickable-respondent">
                                <Col>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-smartwatch margin-right" viewBox="0 0 16 16">
                                        <path d="M9 5a.5.5 0 0 0-1 0v3H6a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 .5-.5V5z" />
                                        <path d="M4 1.667v.383A2.5 2.5 0 0 0 2 4.5v7a2.5 2.5 0 0 0 2 2.45v.383C4 15.253 4.746 16 5.667 16h4.666c.92 0 1.667-.746 1.667-1.667v-.383a2.5 2.5 0 0 0 2-2.45V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H14v-.5a2.5 2.5 0 0 0-2-2.45v-.383C12 .747 11.254 0 10.333 0H5.667C4.747 0 4 .746 4 1.667zM4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3z" />
                                    </svg>
                                    { computation.title }
                                </Col>
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
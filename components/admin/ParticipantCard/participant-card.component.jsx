import { Row, Col, Accordion } from 'react-bootstrap';
import { exportToExcel } from '/services/excel.service'
import './participant-card.styles.css'
import { formatTimeWithYear } from '/utils/time-format.js'


const ParticipantCard = ( {personData: participantData, valueSelectHandler}) => {


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
                        <Col><p>Title</p></Col>
                        <Col><p>Uploaded</p></Col>
                        <Col><p>Last Modified</p></Col>
                    </Row>
                    <hr className='divider'/>
                    {
                        participantData.reports.map(report =>  
                            <Row key={report.id} onClick={() => valueSelectHandler(report)} className="clickable">
                                <Col><p>{ report.title } </p></Col>
                                <Col><p>{ formatTimeWithYear(report.uploaded).toString() } </p></Col>
                                <Col><p>{ formatTimeWithYear(report.lastModified).toString() } </p></Col>
                            </Row>
                        )
                    }                
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ParticipantCard;
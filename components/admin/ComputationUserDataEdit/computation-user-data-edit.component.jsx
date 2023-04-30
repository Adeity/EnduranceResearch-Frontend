import { Fragment, useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

import './computation-user-data-edit.styles.css'

const ComputationUserDataEdit = ({ researchNumber, sjlThreshold, latThreshold, respDataUpdateHandler }) => {

    const [ socJetlagThreshold, setSocJetlagThreshold ] = useState(sjlThreshold)
    const [ latencyFaThreshold, setLatencyFaThreshold ] = useState(latThreshold)

    const onSaveDataClick = () => {
        const updatedVal = { userId: researchNumber, socJetlagThreshold: socJetlagThreshold, latencyFaThreshold: latencyFaThreshold}
        respDataUpdateHandler(updatedVal)    
    }


    return(
        <Fragment>
            <Row className='user-data-container'>
                <Col><b>Výpočetní parametry:</b></Col>
                <Col xs={1}><Form.Label>SJL: </Form.Label></Col>
                <Col>
                    <Form.Control type="text" className='user-data-short-value' value={ socJetlagThreshold } onChange={(e) => setSocJetlagThreshold(e.target.value) }/>
                </Col>
                <Col xs={1}><Form.Label>Latence: </Form.Label></Col>
                <Col>
                    <Form.Control type="text" className='user-data-short-value' value={latencyFaThreshold} onChange={(e) => setLatencyFaThreshold(e.target.value)}/>
                </Col>
                <Col>
                    <Button onClick={onSaveDataClick} className='user-data-button'>Přepočítat</Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ComputationUserDataEdit;
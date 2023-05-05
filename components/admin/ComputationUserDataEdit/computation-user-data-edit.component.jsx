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
                    <Button onClick={onSaveDataClick} className='user-data-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                    </svg>
                        Přepočítat
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ComputationUserDataEdit;
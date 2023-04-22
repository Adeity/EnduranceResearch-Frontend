import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { formatTime, fromString } from '/utils/time-format';
import { useState } from 'react';

import './global-chronotype-values-edit.styles.css'


const GlobalChronotypeValuesEdit = ({chronotypeData, chronotypeUpdater}) => {


    const [form, setForm] = useState(structuredClone(chronotypeData));
    const [errors, setErrors] = useState({});

    const setField = (index, field, value) => {

        const copy = structuredClone(form)
        copy[index][field] = fromString(value);
        setForm(copy)
    }

    const onClick = () => {
        setForm(structuredClone(form));
        chronotypeUpdater(form);
        console.log(form)
    }

    return (
        <Container>
            <Row>
                {
                    chronotypeData.map(chrono => {
                        return (
                            <Col key={chrono.id}>
                                <Form.Label className='edit-line-label'>{chrono.title}</Form.Label>
                                <Form.Group className="subfield">
                                    <Form.Control defaultValue={formatTime(chrono.awake_from)} className="halfwidth" type="text" onChange={(e) => {setField(chrono.id, "awake_from", e.target.value)}}  />
                                    <Form.Control defaultValue={formatTime(chrono.awake_to)} className="halfwidth" type="text" onChange={(e) => {setField(chrono.id, "awake_to", e.target.value)}} />
                                </Form.Group>
                            </Col>
                        )
                    })
                }

            </Row>
            <Row>

                {
                    chronotypeData.map(chrono => {
                        return (
                            <Col key={chrono.id}>
                                <Form.Label className='edit-line-label'>{chrono.title}</Form.Label>
                                <Form.Group className="subfield">
                                    <Form.Control defaultValue={formatTime(chrono.sleep_from)} className="halfwidth" type="text" onChange={(e) => {setField(chrono.id, "sleep_from", e.target.value)}} />
                                    <Form.Control defaultValue={formatTime(chrono.sleep_to)} className="halfwidth" type="text" onChange={(e) => {setField(chrono.id, "sleep_to", e.target.value)}} />
                                </Form.Group>
                            </Col>
                        )
                    })
                }

            </Row>
            <Button variant="primary" className="formButton" onClick={onClick}>
                Uložit
            </Button>
        </Container>
    )
}

export default GlobalChronotypeValuesEdit;
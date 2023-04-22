"use client"
import { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import MeditationEditValues from '../meditation-edit-values/meditation-edit-values.component';
import SleepParentComponent from '../SleepParent/sleep-parent.component';
import './computations-reports.styles.css'

const ComputationsReportsComponent = () => {

    const [ method, setMethod ] = useState('spanek');
    const [ result, setResult ] = useState('');

    let queryString = '';

    const onSearchClick = () => {
        setResult(queryString);
    }

    const onChangeHandlerSelect = (event) => {
        const methodString = event.target.value.toLocaleLowerCase();
        setMethod(methodString);
    }

    const onChangeHandlerInput = (event) => {
        queryString = event.target.value.toLocaleLowerCase();
    }

    const exportAllToXlsx = () => {
        console.warn("export everything to xlsx not implemented yet!")
    }

    const Conditional = ({queryResult}) => {

        switch(method) {
            case("spanek"):
                return <SleepParentComponent queryString={queryResult}/>;
            
            case("meditace"):
                // return <MeditationEditValues queryString={queryResult}/>
                return <p>Meditace not working yet!</p>
        }
    }

    return (
        <Fragment>
            <div className="container p-5">
                <Form className="computations-formQuery">
                    <Form.Group className="mb-3">
                        <Form.Label>ID účastníka</Form.Label>
                        <Form.Control type="text" placeholder="Zadejte ID účastníka.." className="form-control computations-edit-val-form-control" onChange={ onChangeHandlerInput } />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Metoda</Form.Label>
                        <Form.Select className="form-control computations-edit-val-form-control" onChange={ onChangeHandlerSelect }>
                            <option value="spanek">Spánek</option>
                            <option value="meditace">Meditace</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" className="computations-formButton" onClick={onSearchClick}>
                        Vyhledat
                    </Button>
                    <Button variant="primary" className="computations-formButton" onClick={exportAllToXlsx}>
                        Export všeho
                    </Button>
                </Form>
                <hr className='computations-divider'/>
                <Conditional queryResult={result} className="computations-editValues"></Conditional>
            </div>
        </Fragment>
    );
}

export default ComputationsReportsComponent;

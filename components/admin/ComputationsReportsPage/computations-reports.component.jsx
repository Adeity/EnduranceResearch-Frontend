"use client"
import { Fragment, useState } from 'react';
import { exportAllToExcel} from '/services/excel.service'
import { getMethods } from '/services/method.service'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SleepParentComponent from '../SleepParent/sleep-parent.component';
import './computations-reports.styles.css'

const ComputationsReportsComponent = () => {

    const [ methods, setMethods] = useState([]);
    const [ method, setMethod ] = useState(undefined);
    const [ result, setResult ] = useState('');
    const [ disabledFilter, setDisabledFilter ] = useState(false);
    const [ valid, setValid ] = useState(true);

    let queryString = result;

    useEffect(() => {
        getMethods()
        .then(response => setMethods(response));
    }, [])

    const onSearchClick = () => {
        if(validateInput(queryString)) {
            setValid(true)
            setResult(queryString);
        }
        else {
            setValid(false)
        }
    }

    const onChangeHandlerSelect = (event) => {

        const selected = methods.find(option => option.id == event.target.value)
        setMethod(structuredClone(selected));
    }

    const onChangeHandlerInput = (event) => {

        if(validateInput(event.target.value)) {
            setValid(true)
        }
        queryString = event.target.value.toLocaleLowerCase();
    }

    const validateInput = (inputValue) => {
        const regex = /^[a-zA-Z0-9_]{0,7}$/;
        return regex.test(inputValue);
      };

    const exportAllToXlsx = () => {
        exportAllToExcel();
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            event.stopPropagation()
          // Enter key was pressed, execute the button's onClick function
            onSearchClick();
        }
      };
    
    return (
        <Fragment>
            <div className="container p-2">
                <Form className="computations-formQuery">
                    <Form.Group className="mb-3">
                        <Form.Label><b>ID účastníka</b></Form.Label>
                        <Form.Control isInvalid={!valid} disabled={disabledFilter} type="text" placeholder="Zadejte ID účastníka.." onKeyDown={onKeyDown} className="form-control computations-edit-val-form-control" onChange={ onChangeHandlerInput }/>
                        {!valid && <p className='error-text'>Dovoleny pouze písmena, číslice a _! Maximální délka 7 znaků.</p>}

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label><b>Metoda</b></Form.Label>
                        <Form.Select disabled={disabledFilter} className="form-control computations-edit-val-form-control" onChange={ onChangeHandlerSelect }>
                            {
                                methods.map(m => 
                                <option value={m.id} key={m.id}>
                                    {m.title}
                                </option>
                            )}
                            <option defaultValue value={{title: "None", id: NaN}}>Vše</option>
                        </Form.Select>
                    </Form.Group>
                    <Button disabled={disabledFilter} variant="primary" className="computations-formButton" onClick={onSearchClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        Vyhledat
                    </Button>
                    <Button variant="primary" className="computations-formButton" onClick={exportAllToXlsx}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-filetype-xlsx" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM7.86 14.841a1.13 1.13 0 0 0 .401.823c.13.108.29.192.479.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.002 1.002 0 0 0-.375-.357 2.028 2.028 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.093 1.093 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.777.15-.224.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.558.558 0 0 1-.255.193c-.111.047-.25.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.249-.115.578.578 0 0 1-.255-.384h-.764Zm-3.726-2.909h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415H1.5l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Zm1.923 3.325h1.697v.674H5.266v-3.999h.791v3.325Zm7.636-3.325h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                        </svg>
                        Export všeho
                    </Button>
                </Form>

                <hr className='computations-divider'/>
                <SleepParentComponent queryString={result} method={method} setDisabledFilter={setDisabledFilter}/>

            </div>
        </Fragment>
    );
}

export default ComputationsReportsComponent;

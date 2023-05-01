import ParticipantCard from '../ParticipantCard/participant-card.component';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import { useState, useCallback, useEffect } from 'react';
import { exportSelectedToExcel} from '/services/excel.service'

import './computation-report-select.styles.css'

const ComputationReportSelectComponent = ({ data, valueSelectHandler, respDataUpdateHandler, onPageSwitch, totalRespondentsNum, activePage, setActivePage }) => {

    const getSelectedFromData = (peopleData) => {
        const selectedList = {}
        peopleData.forEach(person => selectedList[person.id] = {id: person.id, checked: false });
        return selectedList;
    }

    const [ pageSize, setPageSize ] = useState(5);
    const [allChecked, setAllChecked] = useState(false);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const [selectedToExport, setSelectedToExport] = useState(getSelectedFromData(data));

    const pages = [];
    for(let pageNum = 1; pageNum <= Math.ceil(totalRespondentsNum / pageSize); pageNum++) {
        pages.push(
          <Pagination.Item key={pageNum} active={pageNum === activePage} onClick={() => {
                    onPageSwitch(pageNum, pageSize)
                    setActivePage(pageNum)
                }
            }>
            {pageNum}
          </Pagination.Item>,
        );
    }

    const onExportSelectedClick = () => {

        const toExport = []
        for (var key in selectedToExport) 
            if (selectedToExport[key].checked) {
                toExport.push(key);
            }

        if (selectedToExport.length !== 0) {
            exportSelectedToExcel(toExport);
        }
    }

    const onAllCheckboxCheck = (isChecked) => {
        for (var key in selectedToExport) 
            selectedToExport[key].checked = isChecked;      
            
        setAllChecked(isChecked)
    }

    const onPersonSelect = (id, isSelected) => {
        if(isSelected) {
            selectedToExport[id].checked = true
            forceUpdate()
        }
        else {
            selectedToExport[id].checked = false
            setAllChecked(false)
            forceUpdate()

        }
    }       

    return(
        <Container>
            <Row>
                <Form.Check className='centered-checkbox' checked={allChecked} label="Vše" onChange={(e) => onAllCheckboxCheck(e.target.checked)}/>
            </Row>
            <Row>
                {
                    data.map(participant => 
                        <Row key={participant.id}>
                            <Col md="auto" style={{width: "1em"}}>
                                <Form.Check className='centered-checkbox' checked={selectedToExport[participant.id].checked} onChange={(e) => onPersonSelect(participant.id, e.target.checked)}/>
                            </Col>
                            <Col>
                                <ParticipantCard participantData={participant} valueSelectHandler={valueSelectHandler} respDataUpdateHandler = {respDataUpdateHandler} />
                            </Col>
                        </Row>
                    )
                }
            </Row>
            <Row className='footer-row'>
                <Col xs={10} className='align-bottom'> 
                {
                    Math.ceil(totalRespondentsNum / pageSize) > 1  ? (
                        <Pagination className="top-margin">
                            <Pagination.Prev disabled={activePage - 1 < 1} onClick={() => {
                                    onPageSwitch(activePage - 1, pageSize)
                                    setActivePage(activePage - 1)
                                }
                            }/>
                            {pages}
                            <Pagination.Next disabled={activePage + 1 > Math.ceil(totalRespondentsNum / pageSize)} onClick={() => {
                                    onPageSwitch(activePage + 1, pageSize)
                                    setActivePage(activePage + 1)
                                }
                            }/>
                        </Pagination>
                    ) : (
                        <div></div>
                    )

                }
                </Col>
                <Col>
                    <Button style={{marginTop: "1em"}} onClick={onExportSelectedClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-filetype-xlsx" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM7.86 14.841a1.13 1.13 0 0 0 .401.823c.13.108.29.192.479.252.19.061.411.091.665.091.338 0 .624-.053.858-.158.237-.105.416-.252.54-.44a1.17 1.17 0 0 0 .187-.656c0-.224-.045-.41-.135-.56a1.002 1.002 0 0 0-.375-.357 2.028 2.028 0 0 0-.565-.21l-.621-.144a.97.97 0 0 1-.405-.176.37.37 0 0 1-.143-.299c0-.156.061-.284.184-.384.125-.101.296-.152.513-.152.143 0 .266.023.37.068a.624.624 0 0 1 .245.181.56.56 0 0 1 .12.258h.75a1.093 1.093 0 0 0-.199-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.552.05-.777.15-.224.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.123.524.082.149.199.27.351.367.153.095.332.167.54.213l.618.144c.207.049.36.113.462.193a.387.387 0 0 1 .153.326.512.512 0 0 1-.085.29.558.558 0 0 1-.255.193c-.111.047-.25.07-.413.07-.117 0-.224-.013-.32-.04a.837.837 0 0 1-.249-.115.578.578 0 0 1-.255-.384h-.764Zm-3.726-2.909h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415H1.5l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Zm1.923 3.325h1.697v.674H5.266v-3.999h.791v3.325Zm7.636-3.325h.893l-1.274 2.007 1.254 1.992h-.908l-.85-1.415h-.035l-.853 1.415h-.861l1.24-2.016-1.228-1.983h.931l.832 1.438h.036l.823-1.438Z" />
                        </svg>
                        Export vybraných
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ComputationReportSelectComponent;
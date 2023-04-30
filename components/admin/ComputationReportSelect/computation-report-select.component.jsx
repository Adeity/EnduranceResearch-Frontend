import ParticipantCard from '../ParticipantCard/participant-card.component';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import './computation-report-select.styles.css'
import { useState, useCallback, useEffect } from 'react';
import { exportSelectedToExcel} from '/services/excel.service'


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
        console.warn("export selected only not implemented yet!")

        const toExport = []
        for (var key in selectedToExport) 
            if (selectedToExport[key].checked) {
                toExport.push(key);
            }

        if (selectedToExport.length !== 0) {
            exportSelectedToExcel(toExport);
        }
    }

    // useEffect(() => {
    //     for (var key in selectedToExport) 
    //         selectedToExport[key].checked = allChecked;    
    // }, [allChecked]);

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
            <Row>
                <Col xs={10}> 
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
                    <Button style={{marginTop: "1em"}} onClick={onExportSelectedClick}>Export vybraných</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ComputationReportSelectComponent;
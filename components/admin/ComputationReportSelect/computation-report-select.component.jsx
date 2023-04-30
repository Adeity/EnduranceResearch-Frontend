import ParticipantCard from '../ParticipantCard/participant-card.component';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import './computation-report-select.styles.css'
import { useState, useCallback } from 'react';
import { exportSelectedToExcel} from '/services/excel.service'


const ComputationReportSelectComponent = ({ data, valueSelectHandler, respDataUpdateHandler }) => {

    const getSelectedFromData = (peopleData) => {
        const selectedList = {}
        peopleData.forEach(person => selectedList[person.id] = {id: person.id, checked: false });
        return selectedList;
    }


    const [allChecked, setAllChecked] = useState(false);
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const [selectedToExport, setSelectedToExport] = useState(getSelectedFromData(data));

    const onExportSelectedClick = () => {
        console.warn("export selected only not implemented yet!")

        const toExport = []
        for (var key in selectedToExport) 
            if (selectedToExport[key].checked) {
                console.log(key);
                toExport.push(key);
            }

        if (selectedToExport.length !== 0) {
            console.log(toExport)
            exportSelectedToExcel(toExport);
        }
    }

    // useEffect(() => {
    //     for (var key in selectedToExport) 
    //         selectedToExport[key].checked = allChecked;    
    // }, [allChecked]);

    const onAllCheckboxCheck = (isChecked) => {
        console.log("triggered")
        for (var key in selectedToExport) 
            selectedToExport[key].checked = isChecked;      
            
        setAllChecked(isChecked)
        console.log(allChecked + " " + isChecked)
        for (var key in selectedToExport) 
            if (selectedToExport[key].checked) console.log(selectedToExport[key]) 
    }

    const onPersonSelect = (id, isSelected) => {
        if(isSelected) {
            console.log(id + " x " + isSelected)
            selectedToExport[id].checked = true
            forceUpdate()
        }
        else {
            console.log(id + " y " + isSelected)

            selectedToExport[id].checked = false
            setAllChecked(false)
            forceUpdate()

        }

        console.log(allChecked)
        for (var key in selectedToExport) 
            if (selectedToExport[key].checked) console.log(selectedToExport[key]) 
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
                    <Pagination className="top-margin">
                        <Pagination.Prev />
                        <Pagination.Last />
                    </Pagination>
                </Col>
                <Col>
                    <Button style={{marginTop: "1em"}} onClick={onExportSelectedClick}>Export vybraných</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ComputationReportSelectComponent;
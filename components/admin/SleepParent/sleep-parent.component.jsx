import { Fragment, useState, useEffect } from 'react';
import { Row, Accordion } from 'react-bootstrap';
import { SleepScreens } from '/model/sleep-screen-selection';
import { getPeopleDataSleepPage } from '/services/people.service';
import { getGlobalSleepData, updateGlobalSleepData } from '/services/sleep-global-data.service';
import { updateRespondentComputationData } from '/services/respondent-data.service'
import { updateFormComputation, updateDeviceComputation } from '/services/report.service';

import ComputationFormDetailComponent from '../ComputationFormDetail/computation-form-detail.component';
import ComputationDeviceDetailComponent from '../ComputationDeviceDetail/computation-device-detail.component';
import ComputationReportSelectComponent from '../ComputationReportSelect/computation-report-select.component';
import GlobalChronotypeValuesEdit from '../GlobalChronotypeValuesEdit/global-chronotype-values-edit.component'
import CustomToast from '../CustomToast/custom-toast.component'


const SleepParentComponent = ({ queryString, method }) => {

    const [selectedScreen, setSelectedScreen] = useState(SleepScreens.personSelect);
    const [respondentData, setRespondentData] = useState([]);
    // const [filteredRespondentData, setFilteredRespondentData] = useState([]);
    const [selectedComputation, setSelectedComputation] = useState(undefined);
    const [chronoData, setChronoData] = useState([])
    const [ toast, setToast] = useState({
        show: false,
        title: '',
        message: ''
    })
    const [ totalRespondentsNum, setRespondentsNum ] = useState(0);
    const [ activePage, setActivePage ] = useState(1);

    // get computations data for filtered all respondents
    useEffect(() => {
        const body = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: 5,
            pageNum: 0,
        }
        getPeopleDataSleepPage(body)
            .then(response => {
                setRespondentsNum(response.totalRespondentNumber)
                setRespondentData(response.respondentData)
                setActivePage(response.activePage)
            })
    }, [method, queryString])

    // get global chronotype values, used for all users
    useEffect(() => {
        getGlobalSleepData()
            .then(data => setChronoData(structuredClone(data)))
    }, [])


    // filter respondents according to queryString
    // useEffect(() => {
    //     setFilteredRespondentData(respondentData.filter(respondent => respondent.id.toLowerCase().includes(queryString)));
    //     // setFilteredRespondentData(respondentData);
    // }, [respondentData, queryString])

    const onPageSwitch = (pageNum, pageSize) => {
        const body = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: pageSize,
            pageNum: pageNum - 1,
        }
        getPeopleDataSleepPage(body)
            .then(response => {
                setRespondentsNum(response.totalRespondentNumber)
                setRespondentData(response.respondentData)
            })
    }

    const chronoDataUpdateTrigger = (updatedChronoData) => {

        const pageInfo = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: 5,
            pageNum: 0,
        }

        setChronoData(updatedChronoData)
        updateGlobalSleepData(updatedChronoData, pageInfo)
        .then(response => {
            setRespondentsNum(response.totalRespondentNumber)
            setRespondentData(response.respondentData)
            setActivePage(response.activePage)
        })
    }

    const onReportSelect = (computation) => {
        setSelectedComputation(computation);
        setSelectedScreen(SleepScreens.reportEditValue);
    }

    const onBackClicked = () => {
        setSelectedScreen(SleepScreens.personSelect);
        setSelectedComputation(undefined);
    }

    const onFormSaveClicked = async (computation) => {

        const pageInfo = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: 5,
            pageNum: 0,
        }

        return updateFormComputation(computation, pageInfo)
        .then(response => {
            response.respondentData.forEach(respData => {
                respData.formComputations.forEach(r => {
                    if(r.id === selectedComputation.id) {
                        setSelectedComputation(r)
                    }
                })
            })
            return response;
        })
        .then(response => {
            setRespondentsNum(response.totalRespondentNumber)
            setRespondentData(response.respondentData)
            setActivePage(response.activePage)
        })
        .then(_ => setToast({ 
            show: true,
            title: 'Úspěch',
            message: 'Data úspěšně uložena',
            variant: 'Success'
        }))
        .catch(error => {
            setToast({ 
                show: true,
                title: 'Chyba',
                message: error,
                variant: 'Danger'
            })
        })
        .finally(() =>  setTimeout( () => setToast({ 
            show: false,
            title: '',
            message: ''
        }), 4000))
    }

    const onDeviceSaveClicked = async (computation) => {

        const pageInfo = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: 5,
            pageNum: 0,
        }

        return updateDeviceComputation(computation, pageInfo)
        .then(response => {
            response.respondentData.forEach(respData => {
                respData.deviceComputations.forEach(r => {
                    if(r.id === selectedComputation.id) {
                        setSelectedComputation(r)
                    }
                })
            })
            return response;
        })
        .then(response => {
            setRespondentsNum(response.totalRespondentNumber)
            setRespondentData(response.respondentData)
            setActivePage(response.activePage)
        })        
        .then(_ => setToast({ 
            show: true,
            title: 'Úspěch',
            message: 'Data úspěšně uložena',
            variant: 'Success'
        }))
        .catch(error => {
            setToast({ 
                show: true,
                title: 'Chyba',
                message: error,
                variant: 'Danger'
            })
        })
        .finally(() =>  setTimeout( () => setToast({ 
            show: false,
            title: '',
            message: ''
        }), 4000))
    }

    const onRespDataUpdate = (respCompData) => {

        const pageInfo = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: 5,
            pageNum: 0,
        }

        return updateRespondentComputationData(respCompData, pageInfo)
        .then(response => {
            setRespondentsNum(response.totalRespondentNumber)
            setRespondentData(response.respondentData)
            setActivePage(response.activePage)
        })
        .then(setToast({ 
                show: true,
                title: 'Úspěch',
                message: 'Data úspěšně uložena',
                variant: 'Success'
        }))
        .catch(error => {
            setToast({ 
                show: true,
                title: 'Chyba',
                message: error,
                variant: 'Danger'
            })
        })
        .finally(() =>  setTimeout( () => setToast({ 
            show: false,
            title: '',
            message: ''
        }), 4000))
    }

    const Conditional = () => {

        switch(selectedScreen) {
            case(SleepScreens.personSelect):
                return <ComputationReportSelectComponent 
                    data={respondentData} 
                    valueSelectHandler={onReportSelect} 
                    respDataUpdateHandler={onRespDataUpdate} 
                    totalRespondentsNum={totalRespondentsNum}
                    onPageSwitch={onPageSwitch}
                    activePage={activePage}
                    setActivePage={setActivePage}
                    />;
            case(SleepScreens.reportEditValue):
                return <Fragment>
                            <Row>
                                { chronoData ? (
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Globální hodnoty</Accordion.Header>
                                            <Accordion.Body>
                                                <GlobalChronotypeValuesEdit chronotypeData={chronoData} chronotypeUpdater={ chronoDataUpdateTrigger } />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    ) : ( <p>Hodnoty chronotypu ještě nejsou načtené!</p>)
                                }
                                <hr className='sleep-divider'/>
                            </Row>
                            {
                                selectedComputation.source === "forms" ? (
                                    <ComputationFormDetailComponent 
                                        backClickHandler={onBackClicked} 
                                        computation={selectedComputation} 
                                        saveClickedHandler={onFormSaveClicked}
                                        respDataUpdateHandler = { onRespDataUpdate }
                                    />                                
                                ) : (
                                    <ComputationDeviceDetailComponent
                                        backClickHandler={onBackClicked} 
                                        computation={selectedComputation} 
                                        saveClickedHandler={onDeviceSaveClicked}
                                        respDataUpdateHandler = { onRespDataUpdate }
                                    />
                                )
                            }

                </Fragment>
            default:
                return <p>404 Not Found!</p>
        }
    }

    return(
        <Fragment>
            <Conditional></Conditional>
            <CustomToast title={toast.title} message={toast.message} trigger={toast.show} variant={toast.variant } />
        </Fragment>
    )
}

export default SleepParentComponent;
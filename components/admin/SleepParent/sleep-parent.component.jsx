import { Fragment, useState, useEffect } from 'react';
import { Row, Accordion } from 'react-bootstrap';
import { SleepScreens } from '/model/sleep-screen-selection';
import { getPeopleDataSleep } from '/services/people.service';
import { getGlobalSleepData, updateGlobalSleepData } from '/services/sleep-global-data.service';
import { updateRespondentComputationData } from '/services/respondent-data.service'
import { updateFormComputation, updateDeviceComputation } from '/services/report.service';

import ComputationFormDetailComponent from '../ComputationFormDetail/computation-form-detail.component';
import ComputationDeviceDetailComponent from '../ComputationDeviceDetail/computation-device-detail.component';
import ComputationReportSelectComponent from '../ComputationReportSelect/computation-report-select.component';
import GlobalChronotypeValuesEdit from '../GlobalChronotypeValuesEdit/global-chronotype-values-edit.component'
import CustomToast from '../CustomToast/custom-toast.component'
import { getPeopleDataSleepPage } from '../../../services/people.service';


const SleepParentComponent = ({ queryString }) => {

    const [selectedScreen, setSelectedScreen] = useState(SleepScreens.personSelect);
    const [respondentData, setRespondentData] = useState([]);
    const [filteredRespondentData, setFilteredRespondentData] = useState([]);
    const [selectedComputation, setSelectedComputation] = useState(undefined);
    const [chronoData, setChronoData] = useState([])
    const [ toast, setToast] = useState({
        show: false,
        title: '',
        message: ''
    })
    const [ totalRespondentsNum, setRespondentsNum ] = useState(0);
    const [ activePage, setActivePage ] = useState(1);


    // get computations data for all respondents
    useEffect(() => {
        // getPeopleDataSleep()
        //     .then(response => setRespondentData(response))

        const body = {
            researchNumberQueryString: queryString,
            method: undefined,
            pageLimit: 5,
            pageNum: 0,
        }
        getPeopleDataSleepPage(body)
            .then(response => {
                setRespondentsNum(response.totalRespondentNumber)
                setRespondentData(response.respondentData)
                setActivePage(response.activePage)
            })
    }, [])

    // get global chronotype values, used for all users
    useEffect(() => {
        getGlobalSleepData()
            .then(data => setChronoData(structuredClone(data)))
    }, [])


    // filter respondents according to queryString
    useEffect(() => {
        setFilteredRespondentData(respondentData.filter(respondent => respondent.id.toLowerCase().includes(queryString)));
    }, [respondentData, queryString])

    const onPageSwitch = (pageNum, pageSize) => {
        const body = {
            researchNumberQueryString: queryString,
            method: undefined,
            pageLimit: pageSize,
            pageNum: pageNum - 1,
        }
        console.log("getting page number " + pageNum)
        getPeopleDataSleepPage(body)
            .then(response => {
                setRespondentsNum(response.totalRespondentNumber)
                setRespondentData(response.respondentData)
            })
    }

    useEffect(() => {
        console.log('initial parent mount')
    }, [])

    const chronoDataUpdateTrigger = (updatedChronoData) => {
        setChronoData(updatedChronoData)
        updateGlobalSleepData(updatedChronoData)
        .then(response => setRespondentData(response));
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
        return updateFormComputation(computation)
        .then(response => {
            response.forEach(respData => {
                respData.reports.forEach(r => {
                    if(r.id === selectedComputation.id) {
                        setSelectedComputation(r)
                    }
                })
            })
            return response;
        })
        .then(response => setRespondentData(response))
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
        .finally(() =>  setToast({ 
            show: false,
            title: '',
            message: ''
        }))
    }

    const onDeviceSaveClicked = async (computation) => {
        return updateDeviceComputation(computation)
        .then(response => {
            response.forEach(respData => {
                respData.reports.forEach(r => {
                    if(r.id === selectedComputation.id) {
                        setSelectedComputation(r)
                    }
                })
            })
            return response;
        })
        .then(response => setRespondentData(response))
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
        .finally(() =>  setToast({ 
            show: false,
            title: '',
            message: ''
        }))
    }

    const onRespDataUpdate = (respCompData) => {
        return updateRespondentComputationData(respCompData)
        .then(response => setRespondentData(response))
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
                data={filteredRespondentData} 
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

                            <CustomToast title={toast.title} message={toast.message} trigger={toast.show} variant={toast.variant } />

                </Fragment>
            default:
                return <p>404 Not Found!</p>
        }
    }

    return(
        <Fragment>
            <Conditional></Conditional>
        </Fragment>
    )
}

export default SleepParentComponent;
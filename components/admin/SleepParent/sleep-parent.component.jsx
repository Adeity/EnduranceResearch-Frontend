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

import './sleep-parent.styles.css'


const SleepParentComponent = ({ queryString, method, setDisabledFilter }) => {

    const [selectedScreen, setSelectedScreen] = useState(SleepScreens.personSelect);
    const [respondentData, setRespondentData] = useState([]);
    const [selectedComputation, setSelectedComputation] = useState(undefined);
    const [chronoData, setChronoData] = useState([])
    const [ toast, setToast] = useState({
        show: false,
        title: '',
        message: ''
    })
    const [ totalRespondentsNum, setRespondentsNum ] = useState(0);
    const [ activePage, setActivePage ] = useState(1);

    const pageLimit = 5;

    // get computations data for filtered all respondents
    useEffect(() => {
        const body = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: pageLimit,
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


    const selectNewestRecalculation = (response) => {

        response.respondentData.forEach(respData => {

            let computations = selectedComputation.source === "forms" ? respData.formComputations : respData.deviceComputations;
            computations = computations.filter(
                c => c.title === selectedComputation.title && c.version === selectedComputation.version
            )
            if(computations.length == 0) return;

            let maximum = 0;
            let maxComp = selectedComputation;
            for(let i = 0; i < computations.length; i++) {
                if (computations[i].recalculations > maximum) {
                    maximum = computations[i].recalculations
                    maxComp = computations[i]
                }
            }
            setSelectedComputation(maxComp)
        })
        return response;
    }

    const chronoDataUpdateTrigger = (updatedChronoData) => {

        const pageInfo = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: pageLimit,
            pageNum: activePage - 1,
        }

        setChronoData(updatedChronoData)
        updateGlobalSleepData(updatedChronoData, pageInfo)
        .then(response => selectNewestRecalculation(response))
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

    const onReportSelect = (computation) => {
        setSelectedComputation(computation);
        setSelectedScreen(SleepScreens.reportEditValue);
        setDisabledFilter(true);
    }

    const onBackClicked = () => {
        setSelectedScreen(SleepScreens.personSelect);
        setSelectedComputation(undefined);
        setDisabledFilter(false);
    }

    const onFormSaveClicked = async (computation) => {

        const pageInfo = {
            researchNumberQueryString: queryString,
            method: method,
            pageLimit: 5,
            pageNum: activePage - 1,
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
            pageNum: activePage - 1,
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
            pageNum: activePage - 1,
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
                                            <Accordion.Header>
                                                Globální hodnoty chronotypu
                                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-alarm-fill margin-left" viewBox="0 0 16 16">
                                                    <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                                </svg>
                                            </Accordion.Header>
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
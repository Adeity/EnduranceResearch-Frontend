import { Fragment } from 'react';
import { formatTime } from '/utils/time-format';
import { getChronotypeTitle } from '/model/chronotype-enum'
import './respondent-chronotype-card.styles.css'



const RespondentChronotypeCardComponent = ({computation, socJetlagThreshold, latencyFaThreshold}) => {

    return(
        <Fragment>
            <h4 className='header'>Chronotyp</h4>
            <p className='elevated'><b>{ getChronotypeTitle(computation.chronotype) }</b></p>
            <p className='elevated'><b>Časové okno chronotypu - vstávání</b>: od {formatTime(computation.chronoAwakeFrom)} do {formatTime(computation.chronoAwakeTo)}.</p>
            <p className='elevated'><b>Časové okno chronotypu - usínání</b>: od {formatTime(computation.chronoSleepFrom)} do {formatTime(computation.chronoSleepTo)}.</p>
            {/* <p className='elevated'>Latence usnutí <b>{ computation.latency }</b> (z dotazníku PSQI) je <b>{ computation.latencyFaGreater ? "VĚTŠÍ" : "MENŠÍ" }</b> než hranice <b>{latencyFaThreshold}</b>.</p>
            <p className='elevated'>Sociální jetlag <b>{ computation.socJetlag }</b> je <b>{ computation.jetlagBiggerThanX ? "VĚTŠÍ" : "MENŠÍ ROVNO" }</b> než hranice <b>{ socJetlagThreshold }</b>.</p> */}
        </Fragment>
    )
}

export default RespondentChronotypeCardComponent;
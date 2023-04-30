import { Fragment } from 'react';
import { formatTime } from '/utils/time-format';
import { getChronotypeTitle } from '/model/chronotype-enum'
import './respondent-chronotype-card.styles.css'



const RespondentChronotypeCardComponent = ({computation, socJetlagThreshold, latencyFaThreshold}) => {

    return(
        <Fragment>
            <p className='elevated'>Chronotyp: <b>{ getChronotypeTitle(computation.chronotype) }</b></p>
            <p className='elevated'>Vstává od <b>{formatTime(computation.chronoAwakeFrom)}</b> do <b>{formatTime(computation.chronoAwakeTo)}</b>.</p>
            <p className='elevated'>Chodí spát od: <b>{formatTime(computation.chronoSleepFrom)}</b> do <b>{formatTime(computation.chronoSleepTo)}</b>.</p>
            <p className='elevated'>Latence usnutí <b>{ computation.latency }</b> (z dotazníku PSQI) je <b>{ computation.latencyFaGreater ? "VĚTŠÍ" : "MENŠÍ" }</b> než hranice <b>{latencyFaThreshold}</b>.</p>
            <p className='elevated'>Sociální jetlag <b>{ computation.socJetlag }</b> je <b>{ computation.jetlagBiggerThanX ? "VĚTŠÍ" : "MENŠÍ ROVNO" }</b> než hranice <b>{ socJetlagThreshold }</b>.</p>

        </Fragment>
    )
}

export default RespondentChronotypeCardComponent;
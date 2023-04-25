import { Fragment } from 'react';
import { formatTime } from '/utils/time-format';
import { getChronotypeTitle } from '/model/chronotype-enum'



const RespondentChronotypeCardComponent = ({computation}) => {

    return(
        <Fragment>
            <p>Chronotyp:{ getChronotypeTitle(computation.chronotype) }</p>
            <p>Vstává od {formatTime(computation.chronoAwakeFrom)} do {formatTime(computation.chronoAwakeTo)}.</p>
            <p>Chodí spát od: {formatTime(computation.chronoSleepFrom)} do {formatTime(computation.chronoSleepTo)}.</p>
        </Fragment>
    )
}

export default RespondentChronotypeCardComponent;
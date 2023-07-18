import ComputationsReportsComponent from '../../../../components/admin/ComputationsReportsPage/computations-reports.component'
import RestrictedRoute from "../../../../components/admin/RestrictedRootComponent/RestrictedRoute";


const ComputationsReportsPage = () => {

    return (
        <RestrictedRoute>
            <ComputationsReportsComponent />
        </RestrictedRoute>
    )
}

export default ComputationsReportsPage;
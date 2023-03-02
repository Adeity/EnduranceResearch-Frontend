"use client"
import React from "react";
import RestrictedRoute from "../../../components/admin/RestrictedRootComponent/RestrictedRoute";
import SleepExportPage from "../../../components/admin/SleepExportPage/SleepExportPage";

class App extends React.Component {
    render() {
        return (
            <RestrictedRoute >
                <SleepExportPage />
            </RestrictedRoute>
        )
    }
}

export default App;

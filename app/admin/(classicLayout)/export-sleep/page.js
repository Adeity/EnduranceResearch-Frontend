"use client"
import RestrictedRoute from "../../../../components/admin/RestrictedRootComponent/RestrictedRoute";
import SleepExportPage from "../../../../components/admin/SleepExportPage/SleepExportPage";
import '../../../../styles/admin/LoginPage.css'
import React from "react";

function ExportSleepPage() {
    return (
        <RestrictedRoute>
            <SleepExportPage/>
        </RestrictedRoute>
    )
}

export default ExportSleepPage
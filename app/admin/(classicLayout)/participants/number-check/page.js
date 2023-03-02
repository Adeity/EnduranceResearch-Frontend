"use client"
import RestrictedRoute from "../../../../../components/admin/RestrictedRootComponent/RestrictedRoute";
import ResearchNumberCheckPage from "../../../../../components/admin/ParticipantsPage/ResearchNumberCheckPage";
import React from "react";

export default function NumberCheckPage() {
    return (
        <RestrictedRoute>
            <ResearchNumberCheckPage />
        </RestrictedRoute>
    )
}
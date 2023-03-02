import RestrictedRoute from "../../../../../components/admin/RestrictedRootComponent/RestrictedRoute";
import ParticipantsPage from "../../../../../components/admin/ParticipantsPage/ParticipantsPage";
import React from "react";

export default function AllParticipantsPage() {
    return (
    <RestrictedRoute>
        <ParticipantsPage />
    </RestrictedRoute>)
}
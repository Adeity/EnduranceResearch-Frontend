"use client"
import RestrictedRoute from "../../../../components/admin/RestrictedRootComponent/RestrictedRoute";
import React from "react";
import UserPageComponnet from "../../../../components/admin/UserPage/UserPageComponnet";

export default function UserPage() {
    return (
        <RestrictedRoute>
            <UserPageComponnet />
        </RestrictedRoute>
    )
}
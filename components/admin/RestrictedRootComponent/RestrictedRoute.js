"use client"
import React, {useEffect, useLayoutEffect} from "react";
import "./RestrictedRouteLocked.css"
import "./RestrictedRouteAllowed.css"
import useSessionStorage from "../../../hooks/useSessionStorage";

function RestrictedRoute(props) {
    const isLogged = useSessionStorage("loggedUser")
    const redirect = isLogged === null || isLogged === "null"
    if (redirect) {
        if (typeof window !== 'undefined') {
            window.location.href = "/admin/login"
        }
    }
    return (
        <>
            {props.children}
        </>
    )
}

export default RestrictedRoute
"use client"
import React from "react";
import ChangePasswordCard from "./ChangePasswordCard";
import './UserPage.css'
import {sendLogoutRequest} from "../AxiosRequestor/AxiosRequestor";
import useSessionStorage from "../../../hooks/useSessionStorage";

function UserPageComponnet(props) {

    async function handleLogoutButtonClick() {
        await sendLogoutRequest()
            .then((res) => {
                if (!res.loggedIn) {
                    this.props.setLoggedUser(null)
                }
            })
            .catch((e) => {
                console.error(e)
            })
        if (typeof window !== 'undefined') {
            sessionStorage.setItem("loggedUser", null)
            window.location.href = '/admin/login'
        }
    }

    const loggedUserName = useSessionStorage("loggedUser")

    return (
        <div className="UserPage form-signin">
                    <h4>Uživatelská stránka</h4>
                    <p>Přihlášen jako: {loggedUserName}</p>
                    <ChangePasswordCard />
                    <h6 className={"pt-3"}>Odhlášení</h6>
                    <div className={"d-flex justify-content-center"}>
                        <input type={"button"} className={"btn btn-primary"} onClick={() => handleLogoutButtonClick()} value={"Odhlásit se"}/>
                    </div>
        </div>
    )
}

export default UserPageComponnet
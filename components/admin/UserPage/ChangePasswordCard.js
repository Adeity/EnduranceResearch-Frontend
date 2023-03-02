"use client"
import '../FormPage.css'
import React from "react";
import {sendChangePasswordRequest} from "../AxiosRequestor/AxiosUserPage";

class ChangePasswordCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: "",
            newPassword: "",
            newPasswordRepeated: "",
            errorMessage: "",
            isError: false,
            passwordSuccessfullyChanged: false
        }
    }

    handleCurrentPasswordChange(e) {
        this.setState({currentPassword: e.target.value})
    }

    handleNewPasswordChange(e) {
        this.setState({newPassword: e.target.value})
    }

    handleNewPasswordRepeatedChange(e) {
        this.setState({newPasswordRepeated: e.target.value})
    }

    setErrorMessage(message) {
        this.setIsError(true)
        this.setState({errorMessage: message})
    }

    setIsError(isError) {
        this.setState({isError: isError})
    }

    setPasswordSuccessfullyChanged(successFulyChanged) {
        this.setState({passwordSuccessfullyChanged: successFulyChanged})
    }

    inputIsInvalid() {
        const {currentPassword, newPassword, newPasswordRepeated} = this.state;
        if (currentPassword.length < 1 || newPassword.length < 1 || newPasswordRepeated.length < 1) {
            this.setErrorMessage("Políčka nesmí být prázdná.")
            return true
        }
        if (newPassword !== newPasswordRepeated) {
            this.setErrorMessage("Hesla se neshodují.")
            return true
        }
        return false
    }

    async handleChangePasswordButtonClick() {
        this.setIsError(false)
        this.setPasswordSuccessfullyChanged(false)
        if (this.inputIsInvalid()) {
            return;
        }
        const {currentPassword, newPassword, newPasswordRepeated} = this.state;
        await sendChangePasswordRequest(currentPassword, newPassword, newPasswordRepeated)
            .then((res) => {
                this.setPasswordSuccessfullyChanged(true)
            })
            .catch((e) => {
                this.setErrorMessage(e.response.data.errorMessage)
            })
    }

    render() {
        const errorAlert = this.state.isError ? <div className={"alert alert-danger"}>{this.state.errorMessage}</div> : null;
        const successAlert = this.state.passwordSuccessfullyChanged ?
            <div className={"alert alert-success"}>Heslo úspěsně změněno.</div> : null
        return (
            <div className="FormPage">
                <h6>Změna hesla</h6>
                <form>
                    <div className="form-group mb-3 form-floating" >
                        <input className={"form-control"} id={"soucasnePassword"} onChange={(e) => this.handleCurrentPasswordChange(e)}
                                      type="password" placeholder="Zadejte současné heslo"/>
                        <label  className={"form-label"} htmlFor={"soucasnePassword"}>Současné heslo</label>
                    </div>

                    <div className="form-group mb-3 form-floating" >
                        <input className={"form-control"} id={"newPassword"} onChange={(e) => this.handleNewPasswordChange(e)}
                                      type="password" placeholder="Zadejte nové heslo"/>
                        <label className={"form-label"} htmlFor={"newPassword"}>Nové heslo</label>
                    </div>

                    <div className="mb-3 form-floating" >
                        <input className={"form-control"} onChange={(e) => this.handleNewPasswordRepeatedChange(e)} type="password"
                                      placeholder="Zadejte nové heslo znovu"/>
                        <label className={"form-label"}>Nové heslo znovu</label>
                    </div>
                    {successAlert}
                    {errorAlert}
                    <div className={"d-flex justify-content-center"}>
                        <input type={"button"} className={"btn btn-primary"} onClick={() => this.handleChangePasswordButtonClick()} value={"Změnit heslo"}/>
                    </div>
                </form>
            </div>
        );
    }

}

export default ChangePasswordCard;
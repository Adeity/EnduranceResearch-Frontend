"use client"
import React from "react";
import '../../../../styles/admin/LoginPage.css'
import {sendAuthenticateRequest} from "../../../../components/admin/AxiosRequestor/AxiosRequestor";
import {validateInput} from "../../../../components/admin/LoginPage/LoginInputValidator";
import "../../../../components/admin/Errors/ErrorMessage.css"

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            err: null,
            redirect: false
        }
    }

    setErrorState(message) {
        this.setState({err: message})
    }

    setRedirect(redirect) {
        this.setState({redirect: redirect})
    }

    async handleSubmitClick(event) {
        event.preventDefault()
        this.setState({err: null})
        try {
            validateInput(this.state.username, this.state.password)
            await sendAuthenticateRequest(this.state.username, this.state.password)
                .then((res) => {
                    if (res.data.success) {
                        sessionStorage.setItem("loggedUser", res.data.username)
                        window.location.href = "/admin"
                    } else {
                        this.setErrorState("Kombinace uživatelského jména a hesla neexistuje.")
                    }
                })
        } catch (e) {
            console.error(e)
            this.setState({err: e.message})
        }
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value})
    }

    render() {
        const {redirect} = this.state
        if (redirect) {
        }
        return (
            <form className={"form-signin h-100 m-auto d-flex flex-column justify-content-center"}>
                    <h1 className="h3 mb-3 fw-normal">Prosím, přihlašte se</h1>

                    <div className="form-floating">
                        <input value={this.state.username}
                               onChange={(e) => this.handleUsernameChange(e)}
                               className="form-control"
                               id="loginUsername"
                               placeholder="name@example.com"/>
                            <label htmlFor="loginUsername">Uživatelské jméno</label>
                    </div>
                    <div className="form-floating">
                        <input type="password"
                               className="form-control"
                               id="loginPassword"
                               onChange={(e) => this.handlePasswordChange(e)}
                               value={this.state.password}
                               placeholder="Heslo"/>
                            <label htmlFor="loginPassword">Heslo</label>
                    </div>

                <div className={"ErrorMessage"}>
                    {
                        this.state.err != null && <div className={"alert alert-danger"}>{this.state.err}</div>
                    }
                </div>
                <button
                    onClick={(event) => this.handleSubmitClick(event)}
                    className="w-100 btn btn-lg btn-primary mt-3"
                        type="submit">Příhlásit se
                </button>
            </form>
        )
    }
}

export default LoginPage;
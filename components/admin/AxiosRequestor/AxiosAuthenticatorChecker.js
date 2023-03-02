import axios from "axios";
import {checkAuthorizedUrl} from "./UrlConstantHolder";

async function checkAuthorized() {
    return axios.get(checkAuthorizedUrl, {withCredentials: true})
}

export {checkAuthorized}
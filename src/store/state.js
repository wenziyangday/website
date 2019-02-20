import {getToken} from "../util/auth";


let state = {
    token: getToken('my-cookies') || '',
    onOffSide: false
};

export default state;

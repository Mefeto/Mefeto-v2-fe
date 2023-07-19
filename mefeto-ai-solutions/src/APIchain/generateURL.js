import URL_CONFIGs from "./URL_CONFIGs";

function generateURL(name, params = {}) {
    try {
        const URL_CONFIG = URL_CONFIGs[name];

        if (URL_CONFIG === undefined) {
            throw new Error(`Undefined URL name! Couldn't find ${name} from URL_CONFIGs.`);
        }

        let requestParams = URL_CONFIG.requestParams;
        for (const key in params) {
            if (key in requestParams) requestParams[key] = { value: params[key] };
            else throw new Error(`Undefined request parameter! ${key} is invalid request parameter.`);
        }

        let URL = URL_CONFIG.baseURL + '?';
        for (const key in requestParams) {
            if (requestParams[key].value !== null) URL += `${key}=${requestParams[key].value}&`;
        }

        URL = URL.slice(0, -1);
        return URL;
    } catch (e) {
        console.log(e);
    }
}


export default generateURL;
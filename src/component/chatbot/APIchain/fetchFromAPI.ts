import generateURL from "./generateURL";
import convert from "xml-js";

async function fetchFromAPI(name, params = {}) {
    // The API you want to use should be configured at URL_CONFIGs
    const URL = generateURL(name, params);

    const response = await fetch(URL).then(
        data => data.text()
    ).then(
        data => {
            try {
                return convert.xml2js(data, { compact: true, spaces: 4, nativeType: true, });
            } catch {
                try {
                    return JSON.parse(data);
                } catch {
                    return { "ERROR": "Response data is neither JSON nor XML" };
                }
            }
        }
    );
    return response; // JS object
}

export default fetchFromAPI;
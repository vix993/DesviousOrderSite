import config from '../config';

const CONTENT_URL = `${config.URL_BACKEND_TOP}/videos`;

function create(contentObject) {
    return fetch(`${CONTENT_URL}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(contentObject),
    }).then(async (serverResponse) => {
        if (serverResponse.ok) {
            const response = await serverResponse.json();
            return response;
        }
        throw new Error('Error: Unable to register data.')
    });
}

export default {
    create,
}
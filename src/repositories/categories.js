import config from '../config';

const CATEGORIES_URL = `${config.URL_BACKEND_TOP}/categories`;

function getAllWithContent() {
    return fetch(`${CATEGORIES_URL}?_embed=spotify&_embed=videos`).then(async (serverResponse) => {
        if (serverResponse.ok) {
            const response = await serverResponse.json();
            return response;
        }
        throw new Error('Error: Unable to grab data.')
    });
}

export default {
    getAllWithContent,
}
export const SET_CALLBACK = 'SET_CALLBACK';

function handleResponse(response) {
    if(response.ok){
        return response.json()
    }else {
        let  error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

export function callbackForm(data) {
    return dispatch => {
        return fetch('/api/callback', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
    }
}
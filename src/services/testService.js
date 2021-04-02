const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const token = localStorage.getItem('token');
const headers = (token != 'undefined' && token != 'null')
    ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    : { 'Content-Type': 'application/json' };

const testMessage = fetch(`${REACT_APP_API_URL}`, {
    method: 'GET',
    headers
})
    .then(x => x.json());
    
export const testService = {
    testMessage,
}
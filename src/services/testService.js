const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const testMessage = fetch(`${REACT_APP_API_URL}`)
    .then(x => x.json());
    
const register = (x) => fetch(`${REACT_APP_API_URL}/auth/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
});

const login = (x) => fetch(`${REACT_APP_API_URL}/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
}).then(x => x.json()).then(x => localStorage.setItem('token', x.token));

const logout = (x) => fetch(`${REACT_APP_API_URL}/auth/logout`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

const createEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(x)
}).then(x => x.json());

const getEntities = () => fetch(`${REACT_APP_API_URL}/tasks/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

const getEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x._id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

const editEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(x)
}).then(x => x.json());

const deleteEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

export const testService = {
    testMessage,
    register,
    login,
    logout,
    getEntities,
    getEntity,
    createEntity,
    editEntity,
    deleteEntity
}
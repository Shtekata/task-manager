const testMessage = fetch('https://tranquil-sea-17355.herokuapp.com/api/')
    .then(x => x.json());
    
// const register = (x) => fetch('https://tranquil-sea-17355.herokuapp.com/api/auth/register/', {
const register = (x) => fetch('http://localhost:443/api/auth/register/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
});

const login = (x) => fetch('https://tranquil-sea-17355.herokuapp.com/api/auth/login/', {
// const login = (x) => fetch('http://localhost:443/api/auth/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
}).then(x => x.json()).then(x => localStorage.setItem('token', x.token));

const logout = (x) => fetch(`http://localhost:443/api/auth/logout`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

// const createEntity = (x) => fetch('http://localhost:443/api/tasks/', {
const createEntity = (x) => fetch('https://tranquil-sea-17355.herokuapp.com/api/tasks/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(x)
}).then(x => x.json());

const getEntities = (x) => fetch(`http://localhost:443/api/tasks/`, {
// // const getEntities = () => fetch(`https://tranquil-sea-17355.herokuapp.com/api/tasks/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

// const getEntity = (x) => fetch(`http://localhost:443/api/tasks/${x._id}`, {
const getEntity = (x) => fetch(`https://tranquil-sea-17355.herokuapp.com/api/tasks/${x._id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

const editEntity = (x) => fetch(`http://localhost:443/api/tasks/${x._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(x)
}).then(x => x.json());

const deleteEntity = (x) => fetch(`http://localhost:443/api/tasks/${x._id}`, {
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
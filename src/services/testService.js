const testMessage = fetch('https://tranquil-sea-17355.herokuapp.com/api/')
    .then(x => x.json());
    
// const register = (x) => fetch('https://tranquil-sea-17355.herokuapp.com/api/auth/register/', {
const register = (x) => fetch('http://localhost:443/api/auth/register/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
});

// const login = (x) => fetch('https://tranquil-sea-17355.herokuapp.com/api/auth/login/', {
const login = (x) => fetch('http://localhost:443/api/auth/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(x)
}).then(x => x.json()).then(x => localStorage.setItem('token', x.token));

// const createEntity = (x) => fetch('http://localhost:443/api/tasks/create/', {
const createEntity = (x) => fetch('https://tranquil-sea-17355.herokuapp.com/api/tasks/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
});

export const testService = {
    testMessage,
    register,
    login,
    createEntity
}
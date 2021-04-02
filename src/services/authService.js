const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const errorHandler = (x) => {
    if (x.type === 'ERROR') throw ({ message: x.msg });
    return x;
}

const headers = () => localStorage.getItem('token') === null
    ? { 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` };

const register = (x) => fetch(`${REACT_APP_API_URL}/auth/register/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(x)
})
    .then(x => x.json())
    .then(x => { localStorage.setItem('token', x.token); localStorage.setItem('username', x.username); return x })
    .then(x => errorHandler(x));

const login = (x) => fetch(`${REACT_APP_API_URL}/auth/login/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(x)
})
    .then(x => x.json())
    .then(x => { localStorage.setItem('token', x.token); localStorage.setItem('username', x.username); return x })
    .then(x => errorHandler(x));;

const logout = (x) => fetch(`${REACT_APP_API_URL}/auth/logout`, {
    method: 'GET',
    headers: headers()
})
    .then(x => x.json())
    .then(x => { localStorage.removeItem('username'); localStorage.removeItem('token'); return x })
    .then(x => errorHandler(x));

export {
    register,
    login,
    logout,
}
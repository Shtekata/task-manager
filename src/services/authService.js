const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const errorHandler = (x) => {
    if (x.type === 'ERROR') {
        if (x.token !== undefined) localStorage.setItem('token', x.token);
        else localStorage.removeItem('token');
        if (x.username) {
            localStorage.setItem('username', x.username);
            throw ({ message: x.msg, username: x.username });
        } else {
            localStorage.removeItem('username');
            throw ({ message: x.msg })
        };
    };
    return x;
}

const headers = () => (localStorage.getItem('token') === null || localStorage.getItem('token') === 'undefined')
    ? { 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` };

const register = (x) => fetch(`${REACT_APP_API_URL}/auth/register/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(x)
})
    .then(x => x.json())
    .then(x => {
        if (x.token !== undefined) localStorage.setItem('token', x.token);
        if (x.username !== undefined) { localStorage.setItem('username', x.username) };
        return x
    })
    .then(x => errorHandler(x));

const login = (x) => fetch(`${REACT_APP_API_URL}/auth/login/`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(x)
})
    .then(x => x.json())
    .then(x => {
        if (x.token !== undefined) localStorage.setItem('token', x.token);
        if (x.username !== undefined) { localStorage.setItem('username', x.username) };
        return x
    })
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
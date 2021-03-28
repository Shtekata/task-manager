const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const register = (x) => fetch(`${REACT_APP_API_URL}/auth/register/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
});

const login = (x) => fetch(`${REACT_APP_API_URL}/auth/login/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(x)
})
    .then(x => x.json())
    .then(x => { localStorage.setItem('token', x.token); localStorage.setItem('username', x.username); return x })
    .catch(x => console.log(x));

const logout = (x) => fetch(`${REACT_APP_API_URL}/auth/logout`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
})
    .then(x => x.json())
    .then(x => { localStorage.removeItem('username'); return x })
    .catch(x => console.log(`Error: ${x}`));

export {
    register,
    login,
    logout,
}
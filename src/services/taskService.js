const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

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

export {
    getEntities,
    getEntity,
    createEntity,
    editEntity,
    deleteEntity
}
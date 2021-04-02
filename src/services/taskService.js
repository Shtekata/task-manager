const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const errorHandler = (x) => {
    if (x.type === 'ERROR') throw ({ message: x.msg });
    return x;
}

const createEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(x)
}).then(x => x.json());

const getEntities = () => fetch(`${REACT_APP_API_URL}/tasks/`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
})
    .then(x => x.json())
    .then(x => errorHandler(x));

const getEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x._id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

const editEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
    body: JSON.stringify(x)
}).then(x => x.json());

const shiftEntity = ({ _id, col, row }) => {
    const x = {};
    switch (col) {
        case 1: { x.isToDo = false; x.isInProgress = true; x.isDone = false };
            break;
        case 2: { x.isToDo = false; x.isInProgress = false; x.isDone = true };
            break;
        default: { x.isToDo = true; x.isInProgress = false; x.isDone = false };
            break;
    }
    return fetch(`${REACT_APP_API_URL}/tasks/${_id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(x)
    })
        .then(x => x.json())
        .then(x => errorHandler(x));
};

const deleteEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x._id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
}).then(x => x.json());

export {
    getEntities,
    getEntity,
    createEntity,
    editEntity,
    shiftEntity,
    deleteEntity
}
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

const createEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/`, {
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

const getEntities = () => fetch(`${REACT_APP_API_URL}/tasks/`, {
    method: 'GET',
    headers: headers()
})
    .then(x => x.json())
    .then(x => {
        if (x.token !== undefined) localStorage.setItem('token', x.token);
         if (x.username !== undefined) { localStorage.setItem('username', x.username) };
        return x
    })
    .then(x => errorHandler(x));

const getEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x}`, {
    method: 'GET',
    headers: headers()
})
    .then(x => x.json())
    .then(x => {
        if (x.token !== undefined) localStorage.setItem('token', x.token);
         if (x.username !== undefined) { localStorage.setItem('username', x.username) };
        return x
    })
    .then(x => errorHandler(x));

const editEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x._id}`, {
    method: 'PUT',
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
};

const deleteEntity = (x) => fetch(`${REACT_APP_API_URL}/tasks/${x}`, {
    method: 'DELETE',
    headers: headers()
})
    .then(x => x.json())
    .then(x => {
        if (x.token !== undefined) localStorage.setItem('token', x.token);
        if (x.username !== undefined) { localStorage.setItem('username', x.username) };
        return x
    })
    .then(x => errorHandler(x));

export {
    getEntities,
    getEntity,
    createEntity,
    editEntity,
    shiftEntity,
    deleteEntity
}
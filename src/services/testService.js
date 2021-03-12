const testMessage = fetch('https://tranquil-sea-17355.herokuapp.com/api/')
    .then(x => x.json());

export const testService = {
        testMessage
    }
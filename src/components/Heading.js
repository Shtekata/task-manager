import { testService } from '../services/testService';

let message;
testService.testMessage.then(x => message = x);
console.log(message);
const Heading = (x) => (
    <header>
        <h1>Hello world</h1>
        <h2>Message from server:{ message.message }</h2>
        {x.children}
    </header>
);
export default Heading;
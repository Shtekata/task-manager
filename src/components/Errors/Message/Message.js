import { Fragment } from "react";

const Message = ({ msg }) => (
    <Fragment>
        <p className='err-msg'>{msg}</p>
        <style jsx>{`.err-msg{color: red;}`}</style>
    </Fragment>
);
export default Message;
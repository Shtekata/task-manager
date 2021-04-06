const ContactUs = () => (
    <div className='contact-us'>
        <div>
            <h1 className='about-h1'>Contact Us Page</h1>
            <div>
                <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
                <form>
                    {/*{console.log(process.env)}*/}
                    <input defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
                </form>
            </div>
        </div>
        <style jsx>{`
        .about-h1 {
            text-align: center;
            color: #234465;
            text-decoration: underline;
            margin: 1% 0 2% 0;
        }
        `}</style>
    </div>
);

export default ContactUs;
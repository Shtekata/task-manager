const Music = ({
    match,
    location, // window.location
    history   // window.history
}) => (
    <div className='music'>
        <h1 className='about-h1'>Music Page</h1>
        <h1><iframe width="984" height="407" src="https://www.youtube.com/embed/BheqVR4zr84" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></h1>
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

export default Music;
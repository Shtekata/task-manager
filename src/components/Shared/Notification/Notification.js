const Notification = ({ msg, type }) => {
    const classesL = ['notification', 'hidden'];
    const classesI = ['notification', 'hidden'];
    const classesE = ['notification', 'hidden'];
    type === 'l' ? classesL.pop()
        : type === 'i' ? classesI.pop()
            : type === 'e' ? classesE.pop()
                : type = '';
    return (
        <div id="notifications">
            <div id="loadingBox" className={classesL.join(' ')}>
                <span>Loading …</span>
            </div>
            <div id="infoBox" className={classesI.join(' ')}>
                <span>{msg}</span>
            </div>
            <div id="errorBox" className={classesE.join(' ')}>
                <span>{msg}</span>
            </div>
            <style jsx>{`
            .hidden{
                display: none;
            }
            #notifications {
                position: absolute;
                top: 85px;
                right: 20px;
                opacity: 0.9;
            }
            .notification {
                color: #ffffff;
            }
            .notification>span {
               padding: 0.3em 1em 0.3em 1em;
               border-radius: 10px;
               font-size: 16px;
               font-style: italic;
            }
            #loadingBox>span {
                background: #7CB3E9;
                box-shadow: 0px 0px 11px 8px rgba(133, 180, 231, 0.5)
            }
            #infoBox>span {
                background: #393;
                box-shadow: 0px 0px 11px 8px rgba(68, 157, 68, 0.5)
            }
            #errorBox>span {
                background: #F50;
                box-shadow: 0px 0px 11px 8px rgba(251, 96, 22, 0.5)
            }
        `}</style>
        </div>
    )
};

export default Notification;
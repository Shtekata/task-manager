import { useEffect, useState } from "react";

const Notification = ({ msg, type, time = 1500 }) => {
    const [classesL, setClassesL] = useState('notification hidden');
    const [classesI, setClassesI] = useState('notification hidden');
    const [classesE, setClassesE] = useState('notification hidden');

    useEffect(() => {
        if (!msg) return;
        if (type === 'l') { setClassesL('notification'); setTimeout(() => setClassesL('notification hidden'), time) };
        if (type === 'i') { setClassesI('notification'); setTimeout(() => setClassesI('notification hidden'), time) };
        if (type === 'e') { setClassesE('notification'); setTimeout(() => setClassesE('notification hidden'), time) };
    }, [msg, type, time]);

    return (
        <div id="notifications">
            <div id="loadingBox" className={classesL}>
                <span>Loading …</span>
            </div>
            <div id="infoBox" className={classesI}>
                <span>{msg}</span>
            </div>
            <div id="errorBox" className={classesE}>
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
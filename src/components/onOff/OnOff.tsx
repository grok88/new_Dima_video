import React, { useState } from "react";
// import style from './OnOff.module.css'

// Мое решение

/*type OnOffPropsType = {
    onOff:boolean
}
const OnOff = (props:OnOffPropsType) => {
    const {onOff} = props;

    return (
        <div className={style.onOffBlock}>
            <div className={`${style.rect} ${onOff && style.on}`}>
                On
            </div>
            <div className={`${style.rect} ${!onOff && style.off}`}>
                Off
            </div>
            <div className={`${style.circle} ${onOff ? style.on : style.off}`}>
            </div>
        </div>
    );
}*/


// ДИмыча
type PropsType = {
   // onOff: boolean
}

const OnOff = () => {
    let [onOff, setOnOff] = useState<boolean>(false);

    const block = {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px auto',
    }
    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid',
        padding: '5px',
        backgroundColor: onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid',
        padding: '5px',
        marginLeft: '10px',
        backgroundColor: onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid',
        borderRadius: '50%',
        marginLeft: '10px',
        backgroundColor:onOff ? 'green' : 'red'
    }


    return (
        <div style={block}>
            <div style={onStyle}  onClick={() => {
                setOnOff(true);
            }}>
                On
            </div>
            <div style={offStyle} onClick={() => {
                setOnOff(false);
            }}>
                Off
            </div>
            <div style={indicatorStyle}>
            </div>
        </div>
    );
}
export default OnOff;
import React from "react";
import style from './OnOff.module.css' ;

type OnOffPropsType = {
    onOff:boolean
}
const OnOff = (props:OnOffPropsType) => {
    const {onOff} = props;

    return (
        <div className={style.onOffBlock}>
            <div className={onOff ? `${style.rect} ${style.on}` : `${style.rect}`}>
                On
            </div>
            <div className={onOff ? `${style.rect}` : `${style.rect} ${style.off}`}>
                Off
            </div>
            <div className={onOff ? style.circle + " " + style.on : style.circle + " " + style.off }>

            </div>
        </div>
    );
}

export default OnOff;
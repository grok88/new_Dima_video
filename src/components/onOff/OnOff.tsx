import React from "react";
import style from './OnOff.module.css' ;

type OnOffPropsType = {
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
}

export default OnOff;
import React from "react";
import {ClockPropsType} from "./Clock";

export const get2DigitsString = (num: number) => {
    return num < 10 ? '0' + num : num;
}

export const DigitalClockView: React.FC<ClockPropsType> = ({date}) => {
    return <>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </>
}
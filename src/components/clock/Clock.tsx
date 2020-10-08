import React, {useEffect, useState} from "react";

type PropsType = {}


const get2DigitsString = (num: number) => {
    return num < 10 ? '0' + num : num;
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}
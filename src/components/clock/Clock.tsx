import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode?: 'analog' | 'digital';
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

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            view = <DigitalClockView date={date}/>;
    }

    return <div>
        {view}
    </div>
}

export type ClockPropsType = {
    date: Date
}


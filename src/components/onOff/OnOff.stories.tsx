import OnOff from "./OnOff";
import React, {useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff',
    component: OnOff
}
const callback = action('on or off clicked')

export const onMode = () => {
    return <OnOff value={false} onClick={callback}/>
}
export const offMode = () => {
    return <OnOff value={true} onClick={callback}/>
}
export const ModeChanging = () => {
    const [value, setvalue] = useState<boolean>(false)
    return <OnOff value={value} onClick={setvalue}/>
}

import React from "react";
import UncontrolledOnOff from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off mode')

export const OnMode = () => {
    return <UncontrolledOnOff onchange={callback} on={true}/>
}
export const OffMode = () => {
    return <UncontrolledOnOff onchange={callback} on={false}/>
}

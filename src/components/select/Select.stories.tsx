import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

const items = [
    {title: "Alex", value: '1'},
    {title: "Gor", value: '2'},
    {title: "Jora", value: '3'},
    {title: "Anyfriy", value: '4'},
]

const collapsed = action('Select is collapsed');

export const CollapsedMode = () => {
    return <Select items={items} value={'1'} onChange={collapsed}/>
}

export const UnCollapsedMode = () => {
    const [value, setValue] = useState<string>('1');
    return <Select items={items} value={value} onChange={setValue}/>
}

export const ModeChangingWithValue = () => {
    const [value, setValue] = useState<string>('2');

    return <Select items={items} value={value} onChange={setValue}/>
}

export const ModeChangingWithoutValue = () => {
    const [value, setValue] = useState<string>('1');

    return <Select items={items} onChange={setValue}/>
}
import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

const items = [
    {title: "Alex", value: 1},
    {title: "Gor", value: 2},
    {title: "Gora", value: 3},
    {title: "Anyfriy", value: 4},
]

const collapsed = action('Select is collapsed');
const unCollapsed = action('Select is collapsed');
const selectTitle = action('selectTitle');

export const CollapsedMode = () => {
    return <Select items={items} value={1} onChange={collapsed} collapsed={true} selectTitle={collapsed}/>
}
export const UnCollapsedMode = () => {
    const [value, setValue] = useState<number>(1);
    return <Select items={items} value={value} onChange={unCollapsed} collapsed={false} selectTitle={setValue}/>
}
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [value, setValue] = useState<number>(1);

    return <Select items={items} value={value} onChange={setCollapsed} collapsed={collapsed} selectTitle={setValue}/>
}
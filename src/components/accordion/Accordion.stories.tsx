import {Accordion} from "./Accordion";
import {action} from '@storybook/addon-actions';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('collapsed or unCollapsed Accordion');
const onItemClicked = action('some item with id  clicked');

const items = [
    {title:"Alex", value:1},
    {title:"Gor", value:2},
    {title:"Gora", value:3},
    {title:"Anyfriy", value:4},
]
export const CollapsedMode = () => {
    return <Accordion title={'Menu'} collapsed={true} onClick={callback} items={items} onItemClick={onItemClicked}/>
}
export const UnCollapsedMode = () => {
    return <Accordion title={'Menu'} collapsed={false} onClick={callback} items={items} onItemClick={onItemClicked}/>
}
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion title={'Menu'} collapsed={collapsed} onClick={setCollapsed} items={items} onItemClick={(value) => alert(`${value} item - clicked`)}/>
}
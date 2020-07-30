import {Accordion} from "./Accordion";
import {action} from '@storybook/addon-actions';
import React, {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('collapsed or unCollapsed Accordion');

export const CollapsedMode = () => {
    return <Accordion title={'Menu'} collapsed={true} onClick={callback}/>
}
export const UnCollapsedMode = () => {
    return <Accordion title={'Menu'} collapsed={false} onClick={callback}/>
}
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    return <Accordion title={'Menu'} collapsed={collapsed} onClick={setCollapsed}/>
}
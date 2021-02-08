import {Accordion, AccordionType} from './Accordion';
import {action} from '@storybook/addon-actions';
import React, {useState} from 'react';
import {Story} from '@storybook/react/types-6-0'

const eventsCategory = (category: string) => {
    return {
        table: {
            category: category
        }
    }
}
export default {
    title: 'Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...eventsCategory('Colors')
        },
        // assigns the argType to the Events category
        onClick: {
            ...eventsCategory('Events')
        },
        // assigns the argType to the Events category
        onItemClick: {
            ...eventsCategory('Events')
        },
        items:{ ...eventsCategory('Other')},
        title:{ ...eventsCategory('Other')},
        collapsed:{ ...eventsCategory('Other')},
    }
}

const items = [
    {title: 'Alex', value: 1},
    {title: 'Gor', value: 2},
    {title: 'Gora', value: 3},
    {title: 'Anyfriy', value: 4},
]

const callback = action('collapsed or unCollapsed Accordion');
const onItemClicked = action('some item with id  clicked');

const Template: Story<AccordionType> = (args) => <Accordion {...args} />;

const callbacksProps = {
    onClick: callback,
    onItemClick: onItemClicked,
    // items: items,
}
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    ...callbacksProps,
    title: 'Menu',
    collapsed: true,
    items: items,
}
export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    ...callbacksProps,
    title: 'Menu',
    collapsed: false,
    items: items,
}


// export const CollapsedMode = () => {
//     return <Accordion title={'Menu'} collapsed={true} onClick={callback} items={items} onItemClick={onItemClicked}/>
// }
// export const UnCollapsedMode = () => {
//     return <Accordion title={'Menu'} collapsed={false} onClick={callback} items={items} onItemClick={onItemClicked}/>
// }
export const ModeChanging: Story<AccordionType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    // return <Accordion title={'Menu'} collapsed={collapsed} onClick={setCollapsed} items={items}
    // onItemClick={(value) => alert(`${value} item - clicked`)}/>
    return <Accordion {...args} collapsed={collapsed} onClick={setCollapsed}/>
}
ModeChanging.args = {
    title: 'Menu',
    items: items,
    onItemClick: (value) => alert(`${value} item - clicked`)
}
import React from "react";

type ItemsType = {
    title: string;
    value: number;
}

export type AccordionType = {
    title: string;
    collapsed: boolean;
    onClick: (value: boolean) => void;
    /**
     * Elements are showed when accordion is opened
     */
    items: ItemsType[]
    /**
     * Callback that is called when item clicked
     * @param value - is value of clicked item
     */
    onItemClick: (value: number) => void;
    /**
     * Color of title Accordion
     */
    color?:string
}

export const Accordion = React.memo((props: AccordionType) => {
    const {title, collapsed, onClick, items, onItemClick,color} = props;
    return <div>
        <AccordionTitle title={title} onClick={onClick} collapsed={collapsed} color={color}/>
        {!collapsed && <AccordionBody items={items} onItemClick={onItemClick}/>}
    </div>
});

type AccordionTitleType = {
    title: string
    onClick: (value: boolean) => void
    collapsed: boolean
    color?:string
}

const AccordionTitle = React.memo((props: AccordionTitleType) => {
    const {title, onClick, collapsed, color} = props;

    return (
        <h3 onClick={() => onClick(!collapsed)} style={{ color:color ? color : 'black'}}>{title}</h3>
    );
});

type AccordionBodyPropsType = {
    items: ItemsType[];
    onItemClick: (value: number) => void;
}

const AccordionBody = React.memo((props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((el, i) => <li key={i} onClick={() => props.onItemClick(el.value)}>{el.title} </li>)}
        </ul>
    );
});
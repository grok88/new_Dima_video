import React from "react";

type ItemsType = {
    title: string;
    value: number;
}

type AccordionType = {
    title: string;
    collapsed: boolean;
    onClick: (value: boolean) => void;
    items: ItemsType[]
    onItemClick: (value: number) => void;
}

export function Accordion(props: AccordionType) {
    const {title, collapsed, onClick, items, onItemClick} = props;
    return <div>
        <AccordionTitle title={title} onClick={onClick} collapsed={collapsed}/>
        {!collapsed && <AccordionBody items={items} onItemClick={onItemClick}/>}
    </div>
}

type AccordionTitleType = {
    title: string,
    onClick: (value: boolean) => void,
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleType) {
    const {title, onClick, collapsed} = props;

    return (
        <h3 onClick={() => onClick(!collapsed)}>{title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: ItemsType[];
    onItemClick: (value: number) => void;
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, i) => <li key={i} onClick={() => props.onItemClick(el.value)}>{el.title} </li>)}
        </ul>
    );
}
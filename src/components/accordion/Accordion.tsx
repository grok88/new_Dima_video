import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean,
    onClick:(value:boolean) => void
}

export function Accordion(props: AccordionType) {
    const {title, collapsed, onClick} = props;
    return <div>
        <AccordionTitle title={title} onClick={onClick} collapsed={collapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    title: string,
    onClick:(value:boolean) => void,
    collapsed:boolean
}

function AccordionTitle(props: AccordionTitleType) {
    const {title,onClick, collapsed} = props;

    return (
        <h3 onClick={() => onClick(!collapsed)}>{title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
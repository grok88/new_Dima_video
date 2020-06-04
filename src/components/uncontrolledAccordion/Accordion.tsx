import React, { useState } from "react";

type AccordionType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionType) {
    const {title} = props;

    let [collapsed, setCollapsed] = useState<boolean>(true);

    return <div>
        <AccordionTitle title={title}/>
        <button onClick={() => {
            setCollapsed(!collapsed);
        }}>Toggle</button>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    const {title} = props;

    return (
        <h3>{title}</h3>
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
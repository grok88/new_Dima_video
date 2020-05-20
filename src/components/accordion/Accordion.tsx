import React from "react";

type AccordionType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionType) {
    const {title, collapsed} = props;
    return collapsed ?  <div>
                            <AccordionTitle title={title}/>
                            <AccordionBody/>
                        </div> :
                        <div>
                            <AccordionTitle title={title}/>
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
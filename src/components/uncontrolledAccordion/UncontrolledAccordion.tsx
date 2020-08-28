import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionType) {
    const {title} = props;
    // let [collapsed, setCollapsed] = useState<boolean>(true);
    let [state, dispatchCollapsed] = useReducer(reducer, {collapsed: false});

    const titleCollapsed = () => {
        dispatchCollapsed({type: 'TOGGLE-COLLAPSED'});
    }

    return <div>
        <AccordionTitle title={title} titleCollapsed={titleCollapsed}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    title: string,
    titleCollapsed: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    const {title} = props;

    return (
        <h3 onClick={() => props.titleCollapsed()}>{title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul className={'accordion'}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
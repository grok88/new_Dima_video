import React, { useState } from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import UncontrolledOnOff from './components/onOff/UncontrolledOnOff';
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from './components/uncontrolledRating/Rating';
import OnOff from './components/onOff/OnOff';

export  type  RatingType = 0 | 1 | 2 | 3 | 4 | 5 ;

function App() {
    let [ratingValue,setRatingValue] = useState<RatingType>(0);
    let [accordionCollapsed,setAccordionCollapsed] = useState<boolean>(false);
    let [onOff, setOnOff] = useState<boolean>(false);


    return (
        <div className={'app'}>
            <PageTitle title={'This is my APP'}/>
            <b>controlled Rating</b>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledAccordion title={'UltraMenu -UncontrolledAccordion'}/>
            <Accordion title={'menu'} collapsed={accordionCollapsed} onClick ={setAccordionCollapsed} items={[
                {title:"Alex", value:1},
                {title:"Gor", value:2},
                {title:"Gora", value:3},
                {title:"Anyfriy", value:4},
            ]} onItemClick={() => console.log('click')}/>

            <b>UncontrolledRating</b>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <OnOff value={onOff} onClick={setOnOff}/>
            <UncontrolledOnOff/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    const {title} = props;
    return (
        <h1>{title}</h1>
    );
}

export default App;

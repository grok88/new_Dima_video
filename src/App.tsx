import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    debugger
    return (
        <div>
            <PageTitle title={'This is my APP'}/>
            <PageTitle title={'This is Sparta!!!'}/>
            Article1
            <Rating value={3}/>
            <Accordion title={'menu'} collapsed={true}/>
            <Accordion title={'UltraMenu'} collapsed={false}/>
            Article2
            <Rating value={4}/>
            <Rating value={1}/>
            <Rating value={0}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props:PageTitleType) {
    const {title} = props;
    return (
        <h1>{title}</h1>
    );
}

export default App;

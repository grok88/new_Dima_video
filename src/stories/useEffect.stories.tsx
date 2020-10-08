import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}


export const SimpleUseEffectExample = () => {

    console.log('simpleExample');

    const [count, setCount] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = count.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render');
        document.title = count.toString();
    },[]);

    useEffect(() => {
        console.log('useEffect  first render - and every count change');
        document.title = count.toString();
    },[count]);



    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>Count +</button>
            {count}
            <button onClick={() => {setFake(fake + 1)}}>Fake +</button>
            {fake}
        </>
    );
}

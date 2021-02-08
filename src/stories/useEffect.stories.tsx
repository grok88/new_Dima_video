import React, {useEffect, useState} from "react";

export default {
    title: 'Hooks demo/useEffect demo'
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
    }, []);

    useEffect(() => {
        console.log('useEffect  first render - and every count change');
        document.title = count.toString();
    }, [count]);


    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>Count +
            </button>
            {count}
            <button onClick={() => {
                setFake(fake + 1)
            }}>Fake +
            </button>
            {fake}
        </>
    );
}

export const SetIntervalUseEffectExample = () => {

    console.log('SetTimeOutUseEffectExample');

    const [count, setCount] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    // useEffect(() => {
    //
    //     setTimeout(() => {
    //         console.log('setTimeout');
    //         document.title = count.toString();
    //     }, 1000)
    // },[count]);

    useEffect(() => {

        let id = setInterval(() => {
            console.log('tick : ' + count)
            // setCount(count + 1)
            // setCount(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(id);
        }
    }, []);


    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>Count +
            </button>
            Counter: {count}
            <button onClick={() => {
                setFake(fake + 1)
            }}>Fake +
            </button>
            Fake: {fake}
        </>
    );
}
export const ResetEffectExample = () => {

    const [count, setCount] = useState<number>(1);

    console.log('Reset Component rendered with ' + count);


    useEffect(() => {
        console.log('Reset useEffect - ' + count);

        return () => {
            console.log('KILL RESET COMPONENT  - ' + count);
        }
    }, [count]);

    const increase = () => {
        setCount(count + 1)
    }

    return (
        <>
            counter:{count}
            <button onClick={increase}>Click me</button>
        </>
    );
}

export const KeyTrackerEffectExample = () => {

    const [text, setText] = useState<string>('');

    console.log('KeyTracker Component rendered with ' + text);


    useEffect(() => {
        console.log('KeyTracker useEffect - ' + text);

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(state => state + e.key);
        }

        window.addEventListener('keypress', handler);

        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, []);

    return (
        <>
            Text:{text}
        </>
    );
}

export const KeyTrackerWithDependingEffectExample = () => {

    const [text, setText] = useState<string>('');

    console.log('KeyTracker Component rendered with ' + text);


    useEffect(() => {
        console.log('KeyTracker useEffect - ' + text);

        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key);
        }

        window.addEventListener('keypress', handler);

        return () => {
            window.removeEventListener('keypress', handler);
        }
    }, [text]);

    return (
        <>
            Text:{text}
        </>
    );
}

import React, {useMemo, useState} from "react";
import {Select} from "../components/select/Select";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(3);

    let resA = 1;
    let resB = 1;

    resA = useMemo(() => {
        let tempResA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                let test = Math.random();
            }
            tempResA = tempResA * i;
        }
        return tempResA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resB = resB * i;
    }

    return (
        <>
            <input type="text" value={a} onChange={e => setA(Number(e.currentTarget.value))}/>
            <input type="text" value={b} onChange={e => setB(+e.currentTarget.value)}/>
            <div>
                Result for a : {resA}
            </div>
            <div>
                Result for B : {resB}
            </div>
        </>
    );
}


const Users = React.memo((props: { users: Array<string> }) => {
    console.log('USERS Secret');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
});

export const HelpsToReactMemo = () => {
    console.log('Example');
    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<Array<string>>(['Alex', 'Gor', 'Serg']);

    const addUser = () => {
        const newUSer = [...user, 'Jora' + new Date().getTime()];
        setUser(newUSer);
    }

    const newArray = useMemo(() => {
        return user.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [user]);


    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            <button onClick={addUser}>add user</button>
            {count}
            <Users users={newArray}/>
        </>
    );
}

export const HelpsToReactMemoSelect = () => {
    const items = [
        {title: "Minsk", value: '1', countryId:1, population:2000000},
        {title: "Moscow", value: '2', countryId:2, population:11000000},
        {title: "Kiev", value: '3', countryId:3, population:3000000},
        {title: "Piter", value: '4', countryId:2, population:5000000},
    ];

    const [value, setValue] = useState<string>('1');
    const [value1, setValue1] = useState<string>('2');
    const [value2, setValue2] = useState<string>('3');

    const newArrayByM = useMemo(()=>{
        return items.filter(u => u.title.toLowerCase().indexOf('m') > -1);
    }, [items]);
    const newArrayByCountryId = useMemo(()=>{
        return items.filter(u => u.countryId === 2);
    }, [items]);
    const newArrayByPopulation = useMemo(()=>{
        return items.filter(u => u.population >= 10000000);
    }, [items]);

    return (
        <>
            <Select items={newArrayByM} value={value} onChange={setValue}/>
            <Select items={newArrayByCountryId} value={value1} onChange={setValue1}/>
            <Select items={newArrayByPopulation} value={value2} onChange={setValue2}/>
        </>
    )
}

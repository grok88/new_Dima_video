import React, {useCallback, useMemo, useState} from "react";
import {Select} from "../components/select/Select";

export default {
    title: 'useState demo'
}

const generateDate = () => {
    console.log('Generate');
    //difficult counting
    return 34556666;
}

export const HelpsToReactMemo = () => {
    console.log('Example');

    // let res = useMemo(generateDate, []);

    // В useState закидываем функцию - это если тяжелый подсчет и он занимает много времени
    const [count, setCount] = useState<number>(generateDate);


    return (
        <>
            <button onClick={() => {
                setCount(state => state + 1)
            }}>+
            </button>
            {count}
        </>
    );
}

import React, {useRef, useState} from "react"

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setvalue] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let currValue = e.currentTarget.value;
        setvalue(currValue);
    }
    return <>
        <input onChange={onChange}/> - {value}
    </>
}
export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setvalue] = useState('');
    let inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setvalue(el.value);
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        <p>actual value : {value}</p>
    </>
}

export const ControlledInput = () => <input value={'tut.by'}/>
import React, {useRef, useState} from "react"
import {action} from "@storybook/addon-actions";

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

export const ControlledInput = () => {
    const [parentvalue, setparentvalue] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setparentvalue(e.currentTarget.value);
    }
    return <input value={parentvalue} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    const [parentvalue, setparentvalue] = useState<boolean>(true);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setparentvalue(e.currentTarget.checked);
    }
    return <input type="checkbox" checked={parentvalue} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [parentvalue, setparentvalue] = useState<string | undefined>(undefined);
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setparentvalue(e.currentTarget.value);
    }
    return <select value={parentvalue} onChange={onChange}>
        <option>None</option>
        <option value="1">Minsk</option>
        <option value="2">Pinsk</option>
        <option value="3">Dvinsk</option>
    </select>
}
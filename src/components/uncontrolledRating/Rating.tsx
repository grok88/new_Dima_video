import React, {useState} from "react";


export function UncontrolledRating() {

    let [value, setValue] = useState<number>(0);

    return (
        <div>
            <Star selected={value > 0} spanSelected={() =>  setValue(1)} />
            <Star selected={value > 1} spanSelected={() =>  setValue(2)} />
            <Star selected={value > 2} spanSelected={() =>  setValue(3)} />
            <Star selected={value > 3} spanSelected={() =>  setValue(4)} />
            <Star selected={value > 4} spanSelected={() =>  setValue(5)} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean,
    spanSelected: () => void;
}


function Star(props: StarPropsType) {
    const {selected, spanSelected} = props;

    const onSpanSelected = () => {
        spanSelected();
    }

    return <span onClick={onSpanSelected}>{selected ? <b>star </b> : 'star '}</span>;
}
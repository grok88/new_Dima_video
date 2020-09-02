import React, {useState} from "react";
import {RatingType} from "../../App";

type UncontrolledRatingType = {
    defaultVal?: RatingType;
    onClick?: (value: number) => void;
}

export const UncontrolledRating = React.memo((props: UncontrolledRatingType) => {

    let [value, setValue] = useState<number>(props.defaultVal ? props.defaultVal : 3);

    return (
        <div>
            <Star selected={value > 0} spanSelected={() => {
                setValue(1);
                props.onClick && props.onClick(1)
            }}/>
            <Star selected={value > 1} spanSelected={() => {
                setValue(2);
                props.onClick && props.onClick(2)
            }}/>
            <Star selected={value > 2} spanSelected={() => {
                setValue(3);
                props.onClick && props.onClick(3)
            }}/>
            <Star selected={value > 3} spanSelected={() => {
                setValue(4);
                props.onClick && props.onClick(4)
            }}/>
            <Star selected={value > 4} spanSelected={() => {
                setValue(5);
                props.onClick && props.onClick(5)
            }}/>
        </div>
    );
});

type StarPropsType = {
    selected: boolean,
    spanSelected: () => void;
}


const Star = React.memo((props: StarPropsType) => {
    const {selected, spanSelected} = props;

    const onSpanSelected = () => {
        spanSelected();
    }

    return <span onClick={onSpanSelected}>{selected ? <b>star </b> : 'star '}</span>;
});
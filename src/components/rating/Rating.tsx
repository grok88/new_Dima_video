import React from "react";
import {RatingType} from "../../App";

type RatingPropsType = {
    value: RatingType,
    onClick: (value: RatingType) => void
}

export const Rating = React.memo((props: RatingPropsType) => {
    const {value, onClick} = props;
    return (
        <div>
            <Star selected={value > 0} onClick={onClick} value={1}/>
            <Star selected={value > 1} onClick={onClick} value={2}/>
            <Star selected={value > 2} onClick={onClick} value={3}/>
            <Star selected={value > 3} onClick={onClick} value={4}/>
            <Star selected={value > 4} onClick={onClick} value={5}/>
        </div>
    );
});


type StarPropsType = {
    selected: boolean,
    onClick: (value: RatingType) => void,
    value: RatingType
}

const Star = React.memo((props: StarPropsType) => {
    const {selected, onClick, value} = props;
    return <span onClick={() => onClick(value)}>{selected ? <b>star </b> : 'star '}</span>
});
import React, {useState} from "react";
// import style from './UncontrolledOnOff.module.css'


type PropsType = {
    value: boolean,
    onClick: (value: boolean) => void;
}

const OnOff = React.memo((props: PropsType) => {

    const block = {
        width: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px auto',
    }
    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid',
        padding: '5px',
        backgroundColor: props.value ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid',
        padding: '5px',
        marginLeft: '10px',
        backgroundColor: props.value ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid',
        borderRadius: '50%',
        marginLeft: '10px',
        backgroundColor: props.value ? 'green' : 'red'
    }


    return (
        <div style={block}>
            <div style={onStyle} onClick={() => {
                props.onClick(true);
            }}>
                On
            </div>
            <div style={offStyle} onClick={() => {
                props.onClick(false);
            }}>
                Off
            </div>
            <div style={indicatorStyle}>
            </div>
        </div>
    );
});
export default OnOff;
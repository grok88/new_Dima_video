import React, {useState} from "react";

type UncontrolledOnOffType = {
    on?: boolean;
    onchange?: () => void
}

const UncontrolledOnOff = (props: UncontrolledOnOffType) => {
    let [onOff, setOnOff] = useState<boolean>(props.on ? props.on : false);

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
        backgroundColor: onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid',
        padding: '5px',
        marginLeft: '10px',
        backgroundColor: onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        border: '1px solid',
        borderRadius: '50%',
        marginLeft: '10px',
        backgroundColor: onOff ? 'green' : 'red'
    }


    return (
        <div style={block}>
            <div style={onStyle} onClick={() => {
                setOnOff(true);
                props.onchange&&props.onchange();
            }}>
                On
            </div>
            <div style={offStyle} onClick={() => {
                setOnOff(false);
                props.onchange&&props.onchange();
            }}>
                Off
            </div>
            <div style={indicatorStyle}>
            </div>
        </div>
    );
}
export default UncontrolledOnOff;
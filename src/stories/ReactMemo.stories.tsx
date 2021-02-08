import React, {useState} from "react";

export default {
    title: 'Hooks demo/React.memo'
}

const NewMessageCount = (props: { count: number }) => {
    return <div>
        {props.count}
    </div>
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('USERS');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
});

export const Example1 = () => {

    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<Array<string>>(['Alex', 'Gor', 'Serg']);

    const addUser = () => {
        const newUSer = [...user, 'Jora' + new Date().getTime()];
        setUser(newUSer);
    }

    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            <button onClick={addUser}>add user</button>
            <NewMessageCount count={count}/>
            <Users users={user}/>
        </>
    );
}
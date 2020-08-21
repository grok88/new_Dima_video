import React from "react";
import styles from './Select.module.css';

type ItemsType = {
    title: string;
    value: number;
}
type SelectPropsType = {
    items: ItemsType[];
    value: number;
    onChange: (value: any) => void;
    collapsed: boolean;
    selectTitle:(value:number) => void;
}

export const Select = (props: SelectPropsType) => {
    const {items, onChange, value, collapsed, selectTitle} = props;
    const item = items.find(item => item.value === value);
    const title = item && item.title;
    const  onSelectTitle = (item:ItemsType) => {
        selectTitle(item.value)
        onChange(!collapsed)
    }

    return (
        <div className={styles.selectBlock}>
            <div className={styles.title} onClick={() => onChange(!collapsed)}>{title}</div>
            {!collapsed && items.map((item, i) => <div className={styles.item} onClick={() =>  onSelectTitle(item)} key={i}>{item.title}</div>)}
        </div>
    );
}
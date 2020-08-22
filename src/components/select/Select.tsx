import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css';

type ItemsType = {
    title: string;
    value: string;
}
type SelectPropsType = {
    items: ItemsType[];
    value?: string;
    onChange: (value: any) => void;
    // collapsed: boolean;
    // selectTitle: (value: string) => void;
}

export const Select = (props: SelectPropsType) => {
    const {items, onChange, value} = props;

    const [active, setActive] = useState<boolean>(false);
    const [hoveredItemValue, setHoveredItemValue] = useState<string | undefined>(value);

    const selectedItem = items.find(item => item.value === hoveredItemValue);
    // const hoveredItem = items.find(item => item.value === hoveredItemValue);

    useEffect(() => {
        setHoveredItemValue(value);
    }, [value])

    const title = selectedItem && selectedItem.title;

    const toggleItems = () => setActive(!active);
    const onItemSelect = (value: string) => {
        onChange(value);
        setActive(false);
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredItemValue) {
                    const Element = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]
                    if (Element) {
                        onChange(Element.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value);
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false);
        }
        console.log('keyUp')
    }
    return (
        <>
            <select name="" id="">
                <option value="1">Alex</option>
                <option value="2">Gor</option>
                <option value="3">Jora</option>
                <option value="4">Anyfriy</option>
            </select>

            <div className={styles.selectBlock} tabIndex={0} onKeyUp={onKeyUp}>
                <span className={styles.title} onClick={toggleItems}>{title}</span>
                {
                    active && <div className={`${styles.items}`}>
                        {items.map((item, i) => <div
                            onMouseEnter={() => setHoveredItemValue(item.value)}
                            className={styles.item + ' ' + (selectedItem === item ? styles.selected : '')}
                            key={i}
                            onClick={() => onItemSelect(item.value)}>{item.title}</div>)}
					</div>
                }

            </div>

        </>

    );
}


// export const Select = (props: SelectPropsType) => {
//     const {items, onChange, value, collapsed, selectTitle} = props;
//
//     const [active, setActive] = useState<boolean>(true)
//
//     const item = items.find(item => item.value === value);
//     const title = item && item.title;
//
//     const onSelectTitle = (item: ItemsType) => {
//         selectTitle(item.value);
//         onChange(!collapsed);
//     }
//
//     return (
//         <>
//             <select name="" id="">
//                 <option value="1">Alex</option>
//                 <option value="2">Gor</option>
//                 <option value="3">Jora</option>
//                 <option value="4">Anyfriy</option>
//             </select>
//
//             <div className={styles.selectBlock + '' + styles.active}>
//                 <h3 className={styles.title} onClick={() => onChange(!collapsed)}>{title}</h3>
//                 {
//                     active && <div className={`${styles.items}`}>
//                         {!collapsed && items.map((item, i) => <div className={styles.item}
//                                                                    onClick={() => onSelectTitle(item)}
//                                                                    key={i}>{item.title}</div>)}
// 					</div>
//                 }
//
//             </div>
//
//         </>
//
//     );
// }
import React from "react";
import './listsMiddle.scss';

import SidebarItem from "../SidebarItem";


const ListsMiddle = ({ lists, colors, onRemove }) => {

    console.log('dfdf');
    return (
        <>

            {lists &&
                lists.map((item, index) => {
                    return <SidebarItem key={item.id}
                        tasksCount={item.tasks}
                        items={item}
                        name={item.name}
                        color={colors && colors.filter(colorItem => item.colorId === colorItem.id)[0].name}
                        isRemovable
                        onRemove={() => onRemove(item)}
                        lists

                    />
                })}
        </>
    )
}

export default ListsMiddle;
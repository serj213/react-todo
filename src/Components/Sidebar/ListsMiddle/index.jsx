import React from "react";
import './listsMiddle.scss';

import SidebarItem from "../SidebarItem";


const ListsMiddle = ({ lists, colors, onRemove }) => {

    return (
        <>

            {lists &&
                lists.map((item) => {
                    return <SidebarItem key={item.id}
                        name={item.name}
                        color={colors && colors.filter(colorItem => item.colorId === colorItem.id)[0].name}
                        isRemovable
                        onRemove={() => onRemove(item)}

                    />
                })}
        </>
    )
}

export default ListsMiddle;
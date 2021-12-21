import React from 'react'
import { v4 as uuid }from "uuid"

export const AddTaskCardButton = ({taskCardsList, setTaskCardsList}) => {
    const addTaskCard = () => {
        const taskCardId = uuid();
        setTaskCardsList([...taskCardsList,{
            id: taskCardId,
            draggableId: `item${taskCardId}`,
        }])
    }
    return (
        <div className="assTaskCardButtonArea">
            <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
        </div>
    )
}

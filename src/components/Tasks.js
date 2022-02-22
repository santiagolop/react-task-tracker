import { Task } from "./Task"

export const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
        {tasks.map(task => (
            <Task 
            onDelete={onDelete}
            onToggle={onToggle}
            className='task' 
            key={task.id} 
            task={task}/>
        ))}
        </>
    )
}
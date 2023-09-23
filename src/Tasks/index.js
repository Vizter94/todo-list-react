import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(tasks => (
            <li key={tasks.id} className={`list__items ${tasks.done && hideDone ? "list__items--hidden" : "" } ${tasks.done ? "list__items--done" : ""}`}>
                <button 
                onClick={() => toggleTaskDone(tasks.id)}
                className={`list__button--notdone ${tasks.done && "list__button--done"}`}></button>
                <p className="list__text"> {tasks.content}</p>
                <button className="list__button--delete" 
                onClick={() => removeTask(tasks.id)} >
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;
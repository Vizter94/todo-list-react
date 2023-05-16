import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(tasks => (
            <li key={tasks.id} className={`list__items ${tasks.done && props.hideDoneTasks ? "list__items--hidden" : "" } ${tasks.done && "list__items--done"}`}>
                <button className={`list__button--notdone ${tasks.done && "list__button--done"}`}></button>
                <p className="list__text"> {tasks.content}</p>
                <button className="list__button--delete">
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;
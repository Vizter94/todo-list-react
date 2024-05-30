import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice";
import {
  ListStyled,
  ItemStyled,
  DeleteStyled,
  DoneStyled,
  TextStyled,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);

  const dispatch = useDispatch();

  return (
    <ListStyled>
      {tasks.map((task) => (
        <ItemStyled key={task.id} hidden={task.done && hideDone}>
          <DoneStyled onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✓" : " "}
          </DoneStyled>
          <TextStyled done={task.done}> {task.content}</TextStyled>
          <DeleteStyled onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </DeleteStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default TaskList;

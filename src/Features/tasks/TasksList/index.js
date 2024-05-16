import {
  ListStyled,
  ItemStyled,
  DeleteStyled,
  DoneStyled,
  TextStyled,
} from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ListStyled>
    {tasks.map((tasks) => (
      <ItemStyled key={tasks.id} hidden={tasks.done && hideDone}>
        <DoneStyled onClick={() => toggleTaskDone(tasks.id)}>✓</DoneStyled>
        <TextStyled done={tasks.done}> {tasks.content}</TextStyled>
        <DeleteStyled onClick={() => removeTask(tasks.id)}>🗑</DeleteStyled>
      </ItemStyled>
    ))}
  </ListStyled>
);

export default TaskList;

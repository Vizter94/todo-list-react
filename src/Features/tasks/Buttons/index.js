import { Button, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const { tasks } = useSelector(selectTasksState);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <Container>
        <Button onClick={() => dispatch(toggleHideDone())}>
          Ukryj ukończone
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={isEveryTaskDone}
        >
          Ukończ wszystkie
        </Button>
      </Container>
    )
  );
};

export default Buttons;

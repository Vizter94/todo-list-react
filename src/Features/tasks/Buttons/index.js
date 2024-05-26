import { Button, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks } = useSelector(selectTasks);

  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <Container>
        <Button onClick={() => dispatch(toggleHideDone())}>
          Ukryj ukończone
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </Container>
    )
  );
};

export default Buttons;

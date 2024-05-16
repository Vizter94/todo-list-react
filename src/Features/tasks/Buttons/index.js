import { Button, Container } from "./styled";

const Buttons = ({ tasks, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <Container>
      <Button onClick={toggleHideDone}>Ukryj ukończone</Button>
      <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
        Ukończ wszystkie
      </Button>
    </Container>
  );

export default Buttons;

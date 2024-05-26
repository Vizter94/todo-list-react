import Form from "./Form";
import TaskList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../Common/Section";
import Container from "../../Common/Container";

function Task() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Task;

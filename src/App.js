import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zrobić zakupy", done: false },
  { id: 2, content: "Iść do kina", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        />   
    </Container>
  );
}

export default App;

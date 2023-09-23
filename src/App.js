import { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] =useState([
    { id: 1, content: "Zrobić zakupy", done: false },
    { id: 2, content: "Iść do kina", done: true },
  ]);

  const toggleHideDone = () => {setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  return (
    <Container>
      <h1>Lista zadań</h1>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
        />   
    </Container>
  );
}

export default App;

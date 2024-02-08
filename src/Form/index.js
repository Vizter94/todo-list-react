import { useState, useRef } from "react";
import { FormStyled, Button, Input } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const tagRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    tagRef.current.focus();
  };

  return (
    <FormStyled onSubmit={onFormSubmit}>
      <Input
        ref={tagRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </FormStyled>
  );
};

export default Form;

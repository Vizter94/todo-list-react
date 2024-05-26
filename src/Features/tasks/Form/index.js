import { useState, useRef } from "react";
import { FormStyled, Button, Input } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const tagRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addTask({
        content: newTaskContent.trim(),
        done: false,
        id: nanoid,
      })
    );

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

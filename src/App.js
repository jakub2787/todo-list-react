import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const saveTasks = JSON.parse(localStorage.getItem("tasks")); return saveTasks ||
      [
        { id: 1, content: "Przejśc na Reacta", done: true },
        { id: 2, content: "Zjeść obiad", done: true },
      ]
  });

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  }

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })));
  };
  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };
  return (
    <div className="App">
      <Main>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          body={
            <Tasks

              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />}
          extraHeaderContent={
            <Buttons
              setAllDone={setAllDone}
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone} />}
        />
      </Main>
    </div>
  );
};

export default App;

import Form from "./Form";
import Header from "./Header";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Main from "./Main";
const tasks = [
  { id: 1, content: "Przejśc na Reacta", done: true },
  { id: 2, content: "Zjeść obiad", done: true },
];

const hideDone = false;

function App() {
  return (
    <div className="App">
      <Main>
        <Header title="Lista zadań" />
        <Section 
        title="Dodaj nowe zadanie"
         body={<Form />}
          />
        <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        />  
      </Main>
    </div>
  );
}

export default App;

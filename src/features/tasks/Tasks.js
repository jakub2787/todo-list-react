import Form from "./Form";
import Header from "../../common/Header";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Container from "../../common/Container";
import ExampleTasks from "./ExampleTasks";

function Tasks() {

  return (
    <div className="container">
      <Container>
        <Header title="Lista zadań" />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraHeaderContent={<ExampleTasks />}
        />
        <Section
          title="Lista zadań"
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
    </div>
  )
};

export default Tasks;

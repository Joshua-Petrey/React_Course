import UseRequest from '../../hooks/useRequest';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  // sendTaskRequest takes the args
  const {isLoading, error, sendRequest: sendTaskRequest } = UseRequest()

  // this is used as DataFn in UseRequest
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-hhtp-32085-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      // preconfigure createTask first arg to use taskText from enterTaskHandler
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;

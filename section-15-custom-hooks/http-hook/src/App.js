import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import UseRequest from './hooks/useRequest';

function App() {
  
  const [tasks, setTasks] = useState([]);
  
  const {isLoading, error, sendRequest: fetchTasks} = UseRequest()

  useEffect(() => {
     const tranformTasks = async (tasksObj) => {
       const loadedTasks = [];
       for (const taskKey in tasksObj) {
         loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
       }
       setTasks(loadedTasks);
     };

    fetchTasks({
      url: "https://react-hhtp-32085-default-rtdb.firebaseio.com/tasks.json",
    }, tranformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

/* styles */
import styles from "./Badge.module.css";

export const Badge = ({ tasksDone = 0, tasksToDo = 0 }) => {
  const renderTasksCount = () => {
    let tasksCounter = 0;
    if (tasksToDo && tasksDone) {
      tasksCounter = `${tasksDone} de ${tasksToDo}`;
    } else if (tasksToDo) {
      tasksCounter = tasksToDo ? tasksToDo : tasksDone;
    }

    return tasksCounter;
  };

  return <div className={styles.container}>{renderTasksCount()}</div>;
};

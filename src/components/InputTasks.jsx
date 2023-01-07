import { useState } from "react";
/* components */
import { Task } from "./Task";
import { Badge } from "./Badge";
/* assets */
import plus from "../assets/plus.svg";
import clipboard from "../assets/clipboard.png";
/* styles */
import styles from "./InputTasks.module.css";

export const InputTasks = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [tasksCount, setTasksCount] = useState(0);
  const [tasksCountDone, setTasksCountDone] = useState(0);
  const [noTextWarning, setNoTextWarning] = useState("");
  const messageDuplicatedTask =
    "Você já adicionou essa tarefa, vamos tentar algo novo?";
  const messageNoTextTask =
    "Você precisa digitar algo para adicionar uma nova tarefa!";

  const handleAddTask = (event) => {
    event.preventDefault();
    const hasDuplicatedTask = tasks?.filter((task) => task === newTask);

    if (newTask !== "" && !hasDuplicatedTask.length) {
      setTasks([...tasks, newTask]);
      setTasksCount(tasksCount + 1);
    } else {
      setNoTextWarning(
        hasDuplicatedTask.length ? messageDuplicatedTask : messageNoTextTask
      );
    }
    setNewTask("");
  };

  const handleSetTask = (event) => {
    setNoTextWarning("");
    setNewTask(event.target.value);
  };

  const handleDeleteTask = (content, isSelected) => {
    setTasks(tasks.filter((task) => task !== content));
    setTasksCount(tasksCount - 1);
    if (isSelected) {
      setTasksCountDone(tasksCountDone - 1);
    }
  };

  const handleTaskDone = (isSelected) => {
    if (isSelected) {
      setTasksCountDone(tasksCountDone - 1);
    } else {
      setTasksCountDone(tasksCountDone + 1);
    }
  };

  return (
    <main>
      <div className={styles.container}>
        <form>
          <input
            type={"text"}
            placeholder={"Adicione uma nova tarefa"}
            value={newTask}
            onChange={handleSetTask}
          />
          <button
            type="submit"
            className={styles.addTaskButton}
            onClick={handleAddTask}
          >
            Criar <img src={plus} alt="símbolo adicionar" />
          </button>
        </form>
        <p className={styles.noText}>{noTextWarning}</p>
        <div className={styles.header}>
          <div className={styles.indicator}>
            <p>Tarefas criadas</p>
            <Badge tasksToDo={tasksCount} />
          </div>
          <div className={styles.indicator}>
            <p>
              <span>Concluídas</span>
            </p>
            <Badge
              tasksDone={tasksCountDone}
              tasksToDo={tasksCountDone > 0 ? tasksCount : null}
            />
          </div>
        </div>
        <div
          className={
            tasksCount === 0 ? styles.tasksEmpty : styles.tasksContainer
          }
        >
          {tasksCount === 0 ? (
            <div className={styles.noTasks}>
              <img src={clipboard} alt="prancheta sem tarefas" />
              <p>
                <span>Você ainda não tem tarefas cadastradas</span> <br /> Crie
                tarefas e organize seus itens a fazer
              </p>
              <p></p>
            </div>
          ) : (
            tasks?.map((task) => {
              return (
                <Task
                  content={task}
                  key={task}
                  handleTaskDone={handleTaskDone}
                  handleDeleteTask={handleDeleteTask}
                />
              );
            })
          )}
        </div>
      </div>
    </main>
  );
};

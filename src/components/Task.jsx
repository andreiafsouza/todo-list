import { useState } from "react";
/* components */
import { DeleteIcon } from "./DeleteIcon";
import { SelectIcon } from "./SelectIcon";
/* styles */
import styles from "./Tasks.module.css";

export const Task = ({ content, handleDeleteTask, handleTaskDone }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectIconClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.radioTask}
        onClick={() => {
          handleTaskDone(isSelected), handleSelectIconClick();
        }}
      >
        <SelectIcon
          checkColor={isSelected ? "var(--gray-100)" : "none"}
          backgroundColor={isSelected ? "var(--purple-dark)" : "none"}
          color={isSelected ? "var(--purple-dark)" : "var(--blue)"}
        />
      </button>
      <p className={isSelected && styles.isSelected}>{content}</p>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(content, isSelected)}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

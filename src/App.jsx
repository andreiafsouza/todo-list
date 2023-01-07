import { useState } from "react";

import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputTasks } from "./components/InputTasks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <InputTasks />
    </>
  );
}

export default App;

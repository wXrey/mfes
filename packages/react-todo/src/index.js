import React, { useState } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import store from "store/store";

const styles = {
  margin: "10px",
  padding: "15px",
  borderRadius: "5px",
  outline: "none",
  fontSize: "20px",
};

let todoId = 0;

const todos = () => {
  const [inputValue, setInputValue] = useState("");

  const addTodoToStore = () => {
    store.addTodo = { id: ++todoId, label: inputValue };
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodoToStore();
    }
  };

  return (
    <div style={{ textAlign: "center", border: "1px solid lightblue" }}>
      <input
        style={styles}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button style={styles} onClick={addTodoToStore}>
        Add to Store
      </button>
    </div>
  );
};

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: todos,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>Counter</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} style={styles.button}>
        Increment
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default Counter;
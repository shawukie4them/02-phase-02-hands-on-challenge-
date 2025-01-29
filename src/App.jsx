import React from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h1 style={styles.title}>MySpaApp</h1>
        <div style={styles.card}>
          <UserProfile
            name="Marsai Martin"
            role="Software Engineer"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-cf6XqeoFvH5Vom2bHvttrkgDL-Lcot3FA&s"
          />
        </div>
        <div style={styles.card}>
          <Counter />
        </div>
      </div>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    background: "#222",
    color: "#fff",
    textAlign: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  card: {
    padding: "20px",
    background: "#333",
    color: "#fff",
    borderRadius: "12px",
    textAlign: "center",
    width: "400px",
    maxWidth: "90%",
    marginBottom: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

export default App;
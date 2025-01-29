import React from "react";

function UserProfile({ name, role, imageUrl }) {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.role}>{role}</p>
    </div>
  );
}

const styles = {
  card: {
    textAlign: "center",
    padding: "20px",
    background: "#333",
    color: "#fff",
    borderRadius: "12px",
    width: "400px",
    maxWidth: "90%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%", // Makes it a perfect circle
    objectFit: "cover",
    border: "4px solid #1E90FF", // Blue border
    marginBottom: "10px",
  },
  name: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  role: {
    fontSize: "1rem",
    color: "#ccc",
  },
};

export default UserProfile;
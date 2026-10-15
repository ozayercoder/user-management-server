import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World. This the User Management Server");
});
const users = [
  { id: 1, name: "Jhankar", email: "jhankar@example.com" },
  { id: 2, name: "John", email: "john@example.com" },
  { id: 3, name: "Jane", email: "jane@example.com" },
  { id: 4, name: "Doe", email: "doe@example.com" },
];
app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Port num is ${PORT}`);
});

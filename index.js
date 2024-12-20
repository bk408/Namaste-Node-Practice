import express from "express";

const app = express();

const PORT = 7000;


//  Middlewares

app.get("/admin", (req, res, next) => {
  console.log("Admin auth getting checked");

  const token = "abc";
  const isAdminAuthorized = token === "abc";

  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    res.send("Handled by Admin")
  }
});

app.get("/admin/user", (req, res) => {
  res.send("user");
});

app.post("/admin/contact", (req, res) => {
  res.send("Contact");
});

app.delete("/admin/user/data", (req, res) => {
  res.send("Delete user data");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

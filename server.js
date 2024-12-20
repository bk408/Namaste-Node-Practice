import express from "express"

const app = express()

const PORT = 8000;






/* app.get("/details/:detailsId/:desc/:name/:password/:category", (req, res) => {
  console.log(req.params);
  res.send({
    fName: "Bhavya",
    lName: "Khatri",
  });
}); */



app.get("/about-yash", (req, res) => {
  res.send("Get Database ");
});

app.delete("/about-yash", (req, res) => {
  res.send("Database delete");
});



app.post("/about-yash", (req, res) => {
  res.send("Database create");
});


app.use("/contact", (req, res) => {
  res.send("Contact page");
}); 



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
})
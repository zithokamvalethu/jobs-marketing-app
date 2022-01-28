const express = require("express");
const app = express();
const port = 3008;

const availableJobs = [
  { id: "1", jobName: "headChef", location: "Braynston", salary: "34223" },
];

app.use(express.json());
// app.use(express.urlencoded({ extended: false}))
app.get("/", (req, res) => {
  res.send(availableJobs);
});

app.post("/", function (req, res) {
  availableJobs.push(req.body);
  res.send(200);
  console.log("body", req.body);
});

app.put("/:id", (req, res) => {
  let body = req.body;
  let editedJobs = availableJobs.map((availableJobs) => {
    if (availableJobs.id == req.params.id) {
      return { ...availableJobs, location: body.location };
    }
    return availableJobs;
  });
  res.send(editedJobs);
});

app.listen(port, () => {
  console.log(`server running on port ${port} `);
});

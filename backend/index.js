import express from "express";
import { db } from "./db.js";

const app = express();

app.use(express.json());

app.get("/api/documents", (req, res) => {
  const q = "SELECT * FROM documents";

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/api/documents", (req, res) => {
  const q = "INSERT INTO documents (`name`,`createdAt`,`content`) VALUES (?)";

  const values = [req.body.name, req.body.createdAt, req.body.content];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Document has been created successfully.");
  });
});

app.delete("/api/documents/:id", (req, res) => {
  const documentId = req.params.id;
  const q = "DELETE FROM documents WHERE `id` = ?";

  db.query(q, [documentId], (err, data) => {
    if (err) return res.json(err);

    return res.json("Document has been deleted!");
  });
});

app.put("/api/documents/:id", (req, res) => {
  const documentId = req.params.id;
  const q = "UPDATE documents SET `name`=?, `content`=? WHERE `id` = ?";

  const values = [req.body.name, req.body.content];

  db.query(q, [...values, documentId], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.json("Document has been updated!");
  });
});

app.listen(8080, () => {
  console.log("Connected to backend!");
});

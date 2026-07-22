import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hola desde el backend"
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  res.json({
    success: true,
    received: {
      name,
      email,
      message
    }
  });
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});

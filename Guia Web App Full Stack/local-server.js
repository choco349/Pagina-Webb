import { createServer } from "node:http";

const PORT = 5173;

const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Guia Web App Full Stack</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background: #f4f6f8;
      }

      .page {
        min-height: 100vh;
        display: grid;
        place-items: center;
      }

      .card {
        width: 90%;
        max-width: 480px;
        background: white;
        padding: 32px;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
      }

      button {
        border: 0;
        background: #2563eb;
        color: white;
        padding: 12px 18px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
      }

      .result {
        margin-top: 18px;
        padding: 12px;
        background: #ecfdf5;
        border: 1px solid #10b981;
        border-radius: 6px;
      }
    </style>
  </head>
  <body>
    <main class="page">
      <section class="card">
        <h1>Mi primera app full stack</h1>
        <p>Frontend conectado con backend.</p>

        <button id="test-backend">Probar backend</button>
        <div id="result"></div>
      </section>
    </main>

    <script>
      const button = document.querySelector("#test-backend");
      const result = document.querySelector("#result");

      button.addEventListener("click", async () => {
        const response = await fetch("/api/hello");
        const data = await response.json();
        result.className = "result";
        result.textContent = data.message;
      });
    </script>
  </body>
</html>`;

const server = createServer((req, res) => {
  if (req.url === "/api/hello") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hola desde el backend" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`App local corriendo en http://127.0.0.1:${PORT}`);
});

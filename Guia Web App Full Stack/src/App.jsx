import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  async function connectBackend() {
    const response = await fetch("/api/hello");
    const data = await response.json();
    setMessage(data.message);
  }

  return (
    <main className="page">
      <section className="card">
        <h1>Mi primera app full stack</h1>
        <p>React conectado con Express.</p>

        <button onClick={connectBackend}>Probar backend</button>

        {message && <div className="result">{message}</div>}
      </section>
    </main>
  );
}

export default App;

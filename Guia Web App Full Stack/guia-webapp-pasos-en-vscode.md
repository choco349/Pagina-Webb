# Pasos para hacerlo en Visual Studio Code

## 1. Abrir VS Code

Abre Visual Studio Code.

Luego ve a:

```text
File -> Open Folder
```

Crea o selecciona una carpeta llamada:

```text
mi-app
```

## 2. Abrir la terminal

En VS Code ve a:

```text
Terminal -> New Terminal
```

## 3. Crear carpetas

En la terminal:

```bash
mkdir backend frontend
```

## 4. Crear backend

```bash
cd backend
npm init -y
npm install express cors
```

Crea `backend/server.js` y pega el codigo de `backend-server.js`.

Edita `backend/package.json` usando el ejemplo de `backend-package.json`.

Corre el backend:

```bash
npm run dev
```

Debe salir:

```text
Backend corriendo en http://localhost:3000
```

## 5. Crear frontend

Abre otra terminal en VS Code.

```bash
cd ..
cd frontend
npm create vite@latest . -- --template react
npm install
```

Reemplaza `frontend/src/App.jsx` y `frontend/src/App.css` con los archivos `frontend-App.jsx` y `frontend-App.css`.

Corre el frontend:

```bash
npm run dev
```

Abre:

```text
http://localhost:5173
```

Presiona `Probar backend`. Si aparece `Hola desde el backend`, ya funciona.

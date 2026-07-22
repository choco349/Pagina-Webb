# Deploy y dominio

## Frontend en Vercel

1. Entra a https://vercel.com
2. Conecta GitHub.
3. Click en `Add New Project`.
4. Importa tu repo.
5. Configura:

```text
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
```

6. Click en `Deploy`.

## Backend en Render

1. Entra a https://render.com
2. Conecta GitHub.
3. Click en `New Web Service`.
4. Selecciona tu repo.
5. Configura:

```text
Root Directory: backend
Build Command: npm install
Start Command: npm run dev
```

Render te dara una URL como:

```text
https://mi-app-backend.onrender.com
```

## Usar el backend publicado

En `frontend/src/App.jsx`, cambia `http://localhost:3000` por tu URL de Render:

```js
https://mi-app-backend.onrender.com
```

Luego:

```bash
git add .
git commit -m "Use deployed backend URL"
git push
```

## Dominio

Compra o usa un dominio en Cloudflare, Namecheap, GoDaddy o Squarespace Domains.

En Vercel:

```text
Project -> Settings -> Domains -> Add Domain
```

Agrega:

```text
tudominio.com
www.tudominio.com
```

Vercel te dara los DNS. Normalmente:

```text
A record     @    76.76.21.21
CNAME        www  cname.vercel-dns.com
```

Pon esos registros en el panel DNS de tu proveedor.

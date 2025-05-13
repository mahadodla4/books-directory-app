backend-node.js
books.json -- stores the responses
index.js -- contains the control of the request.



# 📚 Book API with Swagger Docs (Node.js + Express)

This is a simple Node.js + Express API that allows you to manage a list of books. It includes full Swagger (OpenAPI 3.0) documentation.

---

## 🛠 Setup Instructions

### 1. Clone or Create the Project

```bash
mkdir book-api
cd book-api
npm init -y
```

### 2. Install Required Packages

```bash
npm install express body-parser cors swagger-ui-express swagger-jsdoc
```

### 3. Project Structure

```
book-api/
├── app.js
├── swagger.js
├── books.json
├── package.json
└── README.md
```

### 4. Create `books.json`

```json
[]
```

### 5. Create `swagger.js`

```js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Book API',
      version: '1.0.0',
      description: 'A simple Express Book API with Swagger docs',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./app.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
```

### 6. Create `app.js`

```js
// Full content from your app.js (make sure to use req.params.id in PUT and DELETE)
```

### 7. Run the Server

```bash
node app.js
```

### 8. Open the API Docs

- API endpoint: [http://localhost:5000/api/books](http://localhost:5000/api/books)
- Swagger UI: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

---

## 📌 API Endpoints

### GET /api/books

Get list of books.

### POST /api/books

Add a new book.

### PUT /api/books/{id}

Update book by index.

### DELETE /api/books/{id}

Delete book by index.

---

## 📚 License

This project is for educational purposes only.

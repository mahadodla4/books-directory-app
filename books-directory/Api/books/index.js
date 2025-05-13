const express=require('express');
const bodyparser=require('body-parser');
const fs=require('fs');
const cors=require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');


const app=express();
const PORT=5000;

app.use(cors());
app.use(bodyparser.json());


//load books
const loadbooks = () => {
    const data=fs.readFileSync('books.json');
    return JSON.parse(data);
};

//save books
const savebooks = (books) => {
    fs.writeFileSync('books.json',JSON.stringify(books,null,2));
};


//ROUTES
//get request
/**
 * * @swagger
 * /api/books:
 *    get:
 *       summary: Retrieve a list of books
 *       responses:
 *         200:
 *         description: A list of books
 */
app.get('/api/books',(req,res) => {
    const books=loadbooks();
    res.json(books);
});

//post request(create)
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book added
 */
app.post('/api/books',(req,res) => {
    const books=loadbooks();
    const newBook=req.body;
    books.push(newBook);
    savebooks(books);
    res.status(201).json(newBook);
});

//put request(update)
/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated
 *       404:
 *         description: Book not found
 */
app.put('/api/books/:id',(req,res) => {
    const books=loadbooks();
    const bookId=parseInt(req.body.id);
    const updatedBook=req.body;

    if(bookId<0 || bookId>=books.length) {
        return res.status(404).send('book not found');
    }

    books[bookId]=updatedBook;
    savebooks(books);
    res.json(updatedBook);
});


//delete request
/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book deleted
 *       404:
 *         description: Book not found
 */

app.delete('/api/books/:id',(req,res) => {
    const books=loadbooks();
    const bookId=parseInt(req.body.id);

    if(bookId<0 || bookId>=books.length) {
        return res.status(404).send('book not found');
    }

    const deletedBook=books.splice(bookId,1);//deleted items from index=bookId to count(1)
    savebooks(books);
    res.json(deletedBook);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});


const express=require('express');
const bodyparser=require('body-parser');
const fs=require('fs');
const cors=require('cors');

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
app.get('/api/books',(req,res) => {
    const books=loadbooks();
    res.json(books);
});

//post request(create)
app.post('/api/books',(req,res) => {
    const books=loadbooks();
    const newBook=req.body;
    books.push(newBook);
    savebooks(books);
    res.status(201).json(newBook);
});

//put request(update)
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

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});


import React,{useState} from "react";
import { addBook } from "../api/bookApi";

const CreateBook = () => {
    const [title,setTitle]=useState('');
    const [genre,setGenre]=useState('');
    const [id,setId]=useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBook = {title,genre,id};
        await addBook(newBook);
        setTitle('');
        setGenre('');
        setId('');
        alert('Book added successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a Book</h2>
            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} required/>
            <input
                type="text"
                placeholder="Book ID"
                value={id}
                onChange={(e) => setId(e.target.value)} required/>
            <input 
                type="text" 
                placeholder="Genre" 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} required/>
            <button type="submit">Add Book</button>
        </form>
    )
};

export default CreateBook;
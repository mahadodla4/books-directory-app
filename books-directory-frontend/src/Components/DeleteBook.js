// src/components/DeleteBook.js
import React, { useState } from 'react';
import { deleteBook } from '../api/bookApi';

const DeleteBook = () => {
    const [id, setId] = useState('');

    const handleDelete = async (e) => {
        e.preventDefault();
        await deleteBook(id);
        setId('');
        alert('Book deleted successfully!');
    };

    return (
        <form onSubmit={handleDelete}>
            <h2>Delete a Book</h2>
            <input 
                type="number" 
                placeholder="Book ID" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
                required 
            />
            <button type="submit">Delete Book</button>
        </form>
    );
};

export default DeleteBook;

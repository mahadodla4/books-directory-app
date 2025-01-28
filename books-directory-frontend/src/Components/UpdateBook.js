import React, { useState } from 'react';
import { updateBook } from '../api/bookApi';

const UpdateBook = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setgenre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateBook(id, { title, genre });
        setId('');
        setTitle('');
        setgenre('');
        alert('Book updated successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update a Book</h2>
            <input 
                type="number" 
                placeholder="Book ID" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Book Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="New genre" 
                value={genre} 
                onChange={(e) => setgenre(e.target.value)} 
            />
            <button type="submit">Update Book</button>
        </form>
    );
};

export default UpdateBook;

import React,{useEffect,useState} from "react";
import { fetchBooks } from "../api/bookApi";

const ListBooks = () => {
    const [books,setBooks] =useState([]);

    useEffect(() => {
        const loadBooks = async () => {
            const fetchedBooks = await fetchBooks();
            setBooks(fetchedBooks);
        };
        loadBooks();
    },[]);

    return (
        <div>
            <h2>List of Books</h2>
            <ul>
                {books.map((book,index) => (
                    <li key ={index}>author: {book.title} ,id:{book.id} ,genre: {book.genre}</li>))}
            </ul>
        </div>
    );
};

export default ListBooks;
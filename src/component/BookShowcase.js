import React from "react";
import Book from "./Book";

export default function BookShowcase({bookList}){
    return(
        <ul>
            {bookList.map(
                mappedBook =>{
                    return (
                        <Book key ={mappedBook.id} book = {mappedBook}></Book>
                    )
                }
            )}
        </ul>
    )
}
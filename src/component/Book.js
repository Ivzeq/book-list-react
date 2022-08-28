import React from "react";

export default function Book ({book}){
    return(
        <div>
            <ul>
                <li>Title: {book.title}</li>
                <li>Author: {book.author}</li>
                <li>Pages: {book.pages}</li>
                
                <li>Read{book.read ?
                <input onChange={() => {}} type="checkbox" checked={true}></input>:
                <input onChange={() => {}} type="checkbox" checked={false}></input>}</li>
            </ul>
        </div>
    )
}
import {React, useState, useEffect} from "react";
import BookShowcase from "./BookShowcase";
import { BookService } from "../service/BookService";
import { testBooks } from "../data/testBookList";


export default function Books(){

    //Declare useState
    const [bookList, setBookList] = useState([]);

    //Set state to initial data
    useEffect(() =>{
        BookService.getBookList()
            .then((res)=>{
                setBookList(res);
            })
    },[])
    
    //Return all book related items
    return(
        <div className="App">
            <BookShowcase bookList = {bookList}></BookShowcase>
        </div>
    )
}
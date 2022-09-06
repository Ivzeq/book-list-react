import {React, useState, useEffect} from "react";
import BookShowcase from "./BookShowcase";
import { BookService } from "../service/BookService";
import { ThumbnailService } from "../service/ThumbnailService";
import BookInputForm from "./BookInputForm";

export default function Books(){

    //Declare useState for data
    const [bookList, setBookList] = useState([]);
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookPages, setBookPages] = useState('');
    const [bookRead, setBookRead] = useState('');
    const [bookThumbnail, setBookThumbnail] = useState('http://books.google.com/books/content?id=0uR3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api');

    //Declare useState for state management
    const [fetchStatus, setFetchStatus] = useState('pending');
    const [fetchError, setFetchError] = useState(null);

    //Set state to initial data
    useEffect(() =>{
        setFetchStatus('inProgress')
        BookService.getBookList()
            .then((res)=>{
                setBookList(res);
            })
            .catch((err) =>{
                setFetchError(err.message)
            })
            .finally(()=>{
                setTimeout(()=>{setFetchStatus('completed')}, 1000 )
            })
            console.log('First Data Input')
    },[])


    //Define bookHandler function which takes the input and adds a new book
    async function bookHandler(e){
        //State and event management
        e.preventDefault()
        setFetchStatus('inProgress')
        console.log(1 + " " + bookThumbnail)
        //Set thumbnail to the correct one

        await ThumbnailService.getThumbnail({
            "read": bookRead,
            "title": bookTitle,
            "author": bookAuthor,
            "pages": bookPages,
        })
            .then( (res)=>{
                console.log(3 + " " + res)
                setBookThumbnail(res)
                console.log(3.5 + " " + res)
            })
        

        //Add final book through addNewBookMethod
        await BookService.addNewBook({
            "read": bookRead,
            "title": bookTitle,
            "author": bookAuthor,
            "pages": bookPages,
            "thumbnail" : bookThumbnail
        },bookList)
            .then((res)=>{
                console.log(4 + " " + bookThumbnail)
                setBookList(res)
                console.log(4.5 + " " + bookThumbnail)
            })
            .catch((err) =>{
                setFetchError(err.message)
            })
            .finally(()=>{
                setTimeout(()=>{setFetchStatus('completed')}, 500 )
            })
        console.log(5 + " " + bookThumbnail)
    }


    //Return all book related items
    return(
        <div>
            <BookInputForm setBookTitle={setBookTitle} setBookAuthor={setBookAuthor} setBookPages={setBookPages} setBookRead={setBookRead} bookHandler={bookHandler}></BookInputForm>
            
            {fetchStatus==='inProgress' && <p>In progress</p>}
            {fetchStatus === 'completed' && fetchError && <p>{fetchError}</p>}
            {fetchStatus === 'completed' && !fetchError && <BookShowcase bookList = {bookList}></BookShowcase>}
        </div>
    )
}
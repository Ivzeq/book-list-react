import {React, useState, useEffect} from "react";
import BookShowcase from "./BookShowcase";
import { BookService } from "../service/BookService";
import { ThumbnailService } from "../service/ThumbnailService";


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
    },[])


    //Define bookHandler function which takes the input and adds a new book
    function bookHandler(e){
        //State and event management
        e.preventDefault()
        setFetchStatus('inProgress')

        //Set thumbnail to the correct one

        ThumbnailService.getThumbnail({
            "read": bookRead,
            "title": bookTitle,
            "author": bookAuthor,
            "pages": bookPages,
        })
            .then((res)=>{
                console.log(res)
                setBookThumbnail(res)
            })
        

        //Add final book through addNewBookMethod
        BookService.addNewBook({
            "read": bookRead,
            "title": bookTitle,
            "author": bookAuthor,
            "pages": bookPages,
            "thumbnail" : bookThumbnail
        },bookList)
            .then((res)=>{
                setBookList(res)
            })
            .catch((err) =>{
                setFetchError(err.message)
            })
            .finally(()=>{
                setTimeout(()=>{setFetchStatus('completed')}, 500 )
            })
    }


    //Return all book related items
    return(
        <div >
            <form>
                <div>
                    <input type="text" placeholder="Ingresar titulo" onChange={(e) => setBookTitle(e.target.value)}></input>
                    <input type="text" placeholder="Ingresar autor" onChange={(e) => setBookAuthor(e.target.value)}></input>
                    <input type="number" placeholder="Ingresa paginas ex. 500" onChange={(e) => setBookPages(e.target.value)}></input>
                    <input type="checkbox" onChange={(e) => setBookRead(e.target.checked)}></input>
                </div>
                
                <button onClick={bookHandler}>Add Book</button>
            </form>
            {fetchStatus==='inProgress' && <p>In progress</p>}
            {fetchStatus === 'completed' && fetchError && <p>{fetchError}</p>}
            {fetchStatus === 'completed' && !fetchError && <BookShowcase bookList = {bookList}></BookShowcase>}
        </div>
    )
}
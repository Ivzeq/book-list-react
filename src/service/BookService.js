import { testBooks } from "../data/testBookList";
import { ThumbnailService } from "./ThumbnailService";

export const BookService = {
    
    //Method to return initial book list
    getBookList: function (){
        return Promise.resolve(testBooks)
    },

    //Method to add a new book
    addNewBook: function (body, lastBookList){
        const read = body.read;
        const title = body.title;
        const author = body.author;
        const pages = body.pages;
        const thumbnail = body.thumbnail;

        console.log("3.9 " + thumbnail)
        const newBookList = [...lastBookList, {
            read,
            title,
            author,
            pages,
            id: lastBookList.length +1,
            thumbnail
        }]

        return Promise.resolve(newBookList)
    }
}
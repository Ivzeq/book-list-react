import { testBooks } from "../data/testBookList";

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

        const newBookList = [...lastBookList, {
            read,
            title,
            author,
            pages,
            id: lastBookList.length +1
        }]

        return Promise.resolve(newBookList)
    }
}
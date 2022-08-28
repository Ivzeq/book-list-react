import { testBooks } from "../data/testBookList";

export const BookService = {
    
    //Method to return initial book list
    getBookList: function (){
        return Promise.resolve(testBooks)
    }
}
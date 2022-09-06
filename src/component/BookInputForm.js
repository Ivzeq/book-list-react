import React from "react";

export default function BookInputForm({bookHandler, setBookTitle, setBookAuthor, setBookPages, setBookRead}){
    return(
        <form>
                <div>
                    <input type="text" placeholder="Ingresar titulo" onChange={(e) => setBookTitle(e.target.value)}></input>
                    <input type="text" placeholder="Ingresar autor" onChange={(e) => setBookAuthor(e.target.value)}></input>
                    <input type="number" placeholder="Ingresa paginas ex. 500" onChange={(e) => setBookPages(e.target.value)}></input>
                    <input type="checkbox" onChange={(e) => setBookRead(e.target.checked)}></input>
                </div>
                
                <button onClick={bookHandler}>Add Book</button>
        </form>
    )
}
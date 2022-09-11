import { Box } from "@mui/material";
import React from "react";
import Book from "./Book";

export default function BookShowcase({bookList}){
    return(
        <Box className="bookDisplay">
            {bookList.map(
                mappedBook =>{
                    return (
                        <Book key ={mappedBook.id} book = {mappedBook}></Book>
                    )
                }
            )}
        </Box>
    )
}
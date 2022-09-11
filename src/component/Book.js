import { Card, Checkbox, Container, List, Typography } from "@mui/material";
import React from "react";

export default function Book ({book}){
    return(
        <Card className="bookContainer">
            <List>
                <Typography>Title: {book.title}</Typography>
                <Typography>Author: {book.author}</Typography>
                <Typography>Pages: {book.pages}</Typography>
                
                <Typography>Read{book.read ?
                <Checkbox color="success" size="small" onChange={() => {}} type="checkbox" checked={true}></Checkbox>:
                <Checkbox color="success" onChange={() => {}} type="checkbox" checked={false}></Checkbox>}</Typography>
            </List>
            <img src={book.thumbnail} alt="Book cover"></img>
        </Card>
    )
}
import React from "react";
import { Button, Checkbox, Container, TextField } from "@mui/material";

export default function BookInputForm({bookHandler, setBookTitle, setBookAuthor, setBookPages, setBookRead}){
    return(
        <form>
                <Container>
                    <TextField InputLabelProps={{style: { color: 'rgb(209,213,219)'},}} variant="filled" size="small" type="text" label="Ingresar titulo" onChange={(e) => setBookTitle(e.target.value)}></TextField>
                    <TextField InputLabelProps={{style: { color: 'rgb(209,213,219)'},}} variant="filled" size="small" type="text" label="Ingresar autor" onChange={(e) => setBookAuthor(e.target.value)}></TextField>
                    <TextField InputLabelProps={{style: { color: 'rgb(209,213,219)'},}} variant="filled" size="small" type="number" label="Ingresa paginas" onChange={(e) => setBookPages(e.target.value)}></TextField>
                    <Checkbox onChange={(e) => setBookRead(e.target.checked)} defaultChecked></Checkbox>
                </Container>
                
                <Button variant="contained" size="small" color="error" onClick={bookHandler}>Add Book</Button>
        </form>
    )
}
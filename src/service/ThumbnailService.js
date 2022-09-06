export const ThumbnailService ={
    getThumbnail: async function (body) {
        //Define base URL and search parameters
        const baseURL = "https://www.googleapis.com/books/v1/volumes?q="
        const bookAuthor = body.author
        const bookTitle = body.title
        const finalURL = (baseURL + bookAuthor + ' ' + bookTitle).replaceAll(' ', '+')
        
        const thumbnailURL = await fetch(finalURL, {mode: 'cors'})
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                
                return res.items[0].volumeInfo.imageLinks.thumbnail
                //console.log(finalURL)
                //console.log(thumbnailURL)
            })
            console.log("2 " + thumbnailURL)
        return Promise.resolve(thumbnailURL);
    }
}
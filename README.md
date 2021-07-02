# M5-Benchmark-
Netflix API
 

You are creating the API for your Netflix App

You are in charge of building the Backend using NodeJS + Express.

 

BACKEND
 

POST Media

GET Medias (list) (with reviews)

GET Media (single) (with reviews)

UPDATE Media

POST Poster to single media

DELETE Media

POST Review to media

DELETE Review of media

 

[EXTRA] Export single media as PDF with reviews

 

[EXTRA] Search media by title (if its not found in yours search in omdb and sync with your database)

 

 

Here is the media :

    {
        "Title": "The Lord of the Rings: The Fellowship of the Ring",
        "Year": "2001",
        "imdbID": "tt0120737",  //UNIQUE
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
    }
 

And the reviews looks like:

 

    {
        "_id": "123455", //SERVER GENERATED
        "comment": "A good book but definitely I don't like many parts of the plot", //REQUIRED
        "rate": 3, //REQUIRED, max 5
        "elementId": "5d318e1a8541744830bef139", //REQUIRED = IMDBID
        "createdAt": "2019-08-01T12:46:45.895Z" // SERVER GENERATED
    }
 

 

FRONTEND
 

Connect your api with your React Netflix Project

 

 
DEPLOY
Both client and server app should be deployed on your Heroku or vercel account.
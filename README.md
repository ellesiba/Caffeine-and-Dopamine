## Project Description
This app is a visual novel for the caffeine lovers of the world. The protagonist is a writer that has lost their spark and goes to the same cafe to write their next project. The player can access the "secret menu" to create/update/delete their favorite drinks, which will pop in the game as the protagonist drops by the cafe.

>Front-end: React <br />
>Back-end: Flask <br />

## Models:
Secret Menu:<br />
    Name of Drink - Drink <br />
    Base(Coffee or Tea) - Boolean <br />
    Milk - Boolean <br />
    Additional Flavors- String <br />
    Taste Profile - String <br />

User: <br />
    Name - String <br />
    Email - String <br />
    Password - String <br />
    Player Name - String <br />
    Pronouns - Boolean <br />

Dog:
    Dog Name - String

Character2:
    Pronouns - Boolean

## Routes: <br />
GET/ - Title Page
GET/story - Story Pages
GET/player - Player Information
GET/secretmenu - Secret Menu Index Page
POST/secretmenu/new- Form to create a secret menu drink
GET/secretmenu/id/edit- Edit secret menu drinks
PUT/secretmenu/:id - Delete secret menu drink
GET/signin - Sign in Page
GET/login - Log in Page

## Wireframes



https://github.com/ellesiba/Caffeine-and-Dopamine/assets/119995266/a12389de-bfbf-43d3-b094-5087fea6958e




## User Stories
As a User, I would like to be able to :

log-in/sign-up.
As a User, I would like to be able to add a drink.
As a User, I would like to be able to view the secret menu items.
As a User, I would like to be able to edit my drink.
As a User, I would like to see an aesthetic application.
As a User, I would like to have fun reading/playing the application.




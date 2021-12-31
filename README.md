## GameMatch
Frontend repository of an application, which allows user to match a game to his/her preferences.
### Building the project
To build this project locally you will need:
- Angular CLI 12 or higher
- Node
- npm Package Manager
- PrimeNG 13
- Git

If you want to run it locally - clone the project
Then change two variables in constants.ts class:
```sh
static SITE_URL: string = 'http://localhost:4200/';
static ENDPOINT: string = 'http://localhost:8080/';
```
and then use Angular to build and run application

```sh
$ ng serve
```
or 
```sh
$ ng serve --open
```
to run application and open it in your browser
or
```sh
$ ng build
```
to build app to dist folder (for production deployment)

#### Angular installation
Make sure you have already installed Node with npm by simply typing
```sh
node -v
```
and
```sh
npm -v
```
in your command prompt
If you don't have it installed, simply download Node from https://nodejs.org/en/download/

Install the CLI using the npm package manager:
```sh
npm install -g @angular/cli
```
### Live preview
https://game-match.piotr-romanczak.pl/
Please be aware that hosting(backend or frontend - don't know that yet) is not fully compatible to run such apps, so first call to database may be slow and take up to one minute.
### Features
- [x] user can see most popular games on the platform
- [x] user can see coming soon games
- [x] user can see single game record page
- [x] user can see different lists of games by preferences
- [x] user can chose his/her preferences when it comes to matching a game
- [x] user can see a list of games matched to his/her preferences
### Future plans
- [ ] user can register/login
- [ ] user can be ranked
- [ ] user can rate every single game
- [ ] user can hide disliked games
- [ ] user can view history of previous matches
- [ ] user can add games to favourites and improve their future match
- [ ] user can edit or add new games to database which will have to be approved by higher ranked user
- [ ] users can match with other users to play with each other
- [ ] users can create their own lists of games
- [ ] users can communicate through platform
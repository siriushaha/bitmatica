## Inkling Coding Exercise

Please implement an autocomplete search UI that filters a list of books as the user types and allows the user to select a particular result to see the full details about that book. The book details UI should have a separate URL that is specific to that book. It should also have some way to easily navigate back to the initial page with the search input. For an example of what the autocomplete search UI might look like, see `./autocomplete-example.gif`.

This package provides a simple harness built on [Create React App](https://github.com/facebook/create-react-app), including some basic styling and an API that allows you to load book data. Feel free to make any modifications you want, to CSS, HTML, or JS. There is also a simple Node.js server at `src/server.js` which you are welcome to modify. Note that the server does not automatically restart itself when you modify it, so you'll need to manually re-run the start script (see below). This package is currently using React v16.8.5. You'll need to use Node.js v8.10 or newer for Create React App to work.

The API responds to HTTP GET requests like [`/api/books`](http://localhost:4000/api/books) and [`/api/books?start=20&count=40`](http://localhost:4000/api/books?start=20&count=40). If you want to query the API directly, you can do so at port 4000; for requests coming from the React client, you can make them directly to a relative path (i.e. `/api/books`) and they will be proxied to the server (using this feature of Create React App: https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development). Note that out of the box, the server will only return pages of at most 50 books at a time. Valid requests will get responses of the following format:

```
{
  "info": {
    "paging": {
      "count": 1,           // The number of results in the API response.
      "total": 788,         // The total number of books the API has.
      "pageNext": 1,        // The value to use for `start` when requesting the next page of data.
      "moreResults": false  // A boolean indicating whether or not there are more results.
    }
  },
  "status": {
    "statusMsg": "Ok",
    "statusDetails": {},
    "statusCode": "HTTPOk"
  },
  "result": [
    {
      "id": "book-id-0",    // A unique ID for this book.
      "copyrightYear": 2010,
      "subtitle": "",
      "edition": "9th edition",
      "briefDescription": "",
      "primaryCategory": "Science",
      "subCategories": [],
      "title": "Biology",
      "thumbnail": "thumbnails/book-13.jpeg",
      "attribution": "Raven et al",
      "description": "Need Raven Biology for your class? Try the Inkling version! Breeze through homework with interactive quizzes, visual guided tours, and quick reference tools like an interactive glossary. It’s everything you need for your course, evolved. No book required.",
      "price": 139.99,
      "chapterPrice": 3.99,
      "publisher": "McGraw-Hill",
      "url": "https://www.inkling.com/store/book/biology-peter-raven-9th/"
    }
  ]
}
```

### Guidelines and Hints

* The book cover images have been provided in `public/thumbnails` if you choose to use them.
* Your solution must work in the latest version of Chrome, but you do not need to ensure any additional browser support unless you would like to.
* Feel free to use the Internet, so long as you don't copy anything that solves the problem for you.
* Feel free to use new external dependencies, so long as they don't solve the problem for you.
* Please commit your code as you go. 

### Available Scripts

In the project directory, you can run the following scripts:

#### `npm start` / `yarn start`

Runs the app and the local API server in development mode, using the two commands described below.<br>
Open [http://localhost:3000](http://localhost:3000) to load the app in the browser. The server is available on port 4000, e.g. [http://localhost:4000/api/books](http://localhost:4000/api/books).

The page will reload if you make edits to the client.<br>
You will also see any lint errors in the console.<br>
You will need to restart the server manually if you edit the server code.

#### `npm start:dev-build` / `yarn start:dev-build`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to load the app in the browser.

The page will reload if you make edits to the client.<br>
You will also see any lint errors in the console.

#### `npm start:server` / `yarn start:server`

Runs the local API server in development mode.<br>
The server is available on port 4000, e.g. [http://localhost:4000/api/books](http://localhost:4000/api/books).

You will need to restart the server manually if you edit the server code.

#### `npm test` / `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

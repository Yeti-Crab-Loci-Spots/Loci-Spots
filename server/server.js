const path = require("path");
const express = require("express");
const app = express();
const restoApiRouter = require("./routes/restoApi");
const cookieSession = require('cookie-session')
const passport = require('passport');
require('./routes/passport') // MLCK?

const PORT = 3000;


/**
 * Handle parsing request body
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */

if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
  app.get("/", (req, res) =>
    res.status(200).sendFile(path.join(__dirname, "../dist/index.html"))
  );
}
/**
 * define route handlers
 */
 
 app.use(cookieSession({
  name: 'github-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/success', (req,res)=>{
  res.send(`Hello world ${req.user}`)
  });

app.get('/auth/error', (req, res) => res.send('Unknown Error'));

app.get('/auth/github', passport.authenticate('github',{ scope: [ 'user' ] }));
app.get('/auth/github/callback', passport.authenticate('github'),
function(req, res) {
  res.redirect('/')
});



app.use("/api/resto", restoApiRouter);

/**
 * catch-all for unknown routes
 *
 */
app.use((req, res) => {
  res.status(404).send("This is not the restaurant you are looking for...");
});

/**
 * Express Error Handler
 */

app.use((err, req, res, next) => {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  console.log(err);
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 *
 * Start server
 */




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
module.exports = app;

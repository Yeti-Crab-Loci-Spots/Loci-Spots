const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy;

 const GITHUB_CLIENT_ID = 'd6f96d8fe0249a93b069';
 const GITHUB_CLIENT_SECRET = '581829d6f3ec584193d85ed96a3e72949945da1c';
 
 passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
 
 passport.use(new GitHubStrategy({
   clientID: GITHUB_CLIENT_ID,
   clientSecret: GITHUB_CLIENT_SECRET,
   callbackURL: 'http://localhost:8080/auth/github/callback'
 },
 function(accessToken, refreshToken, profile, done) {
  console.log({profile});
  console.log({accessToken});
  return done(null, profile);
}
 ));

module.exports = passport;
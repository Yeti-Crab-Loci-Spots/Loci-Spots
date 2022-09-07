const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy;

const GITHUB_CLIENT_ID = 'd6f96d8fe0249a93b069';
const GITHUB_CLIENT_SECRET = '581829d6f3ec584193d85ed96a3e72949945da1c';

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:8080/github/callback'
},
function(accessToken, refreshToken, profile, done) {
  // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(null, profile);
  // });
}
));

module.exports = passport;
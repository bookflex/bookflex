/**
 * Created by Joy on 2017. 5. 15..
 */
import passport from 'passport';
import localStrategy from 'passport-local';

import model from '../model/index';

const LocalStrategy = localStrategy.Strategy;

function setup() {
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    }, (req, email, password, done) => {
      //must check whether or not there is data in db.
      model.getUser(email, password).then(rows => {
        const userInfo = rows[0];

        if (!userInfo) {
          return done(null, false, {message: 'Fail to login.'});
        }

        return done(null, userInfo);
      });
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.userId);
  });

  passport.deserializeUser((userId, done) => {
    model.getUserByUserId(userId).then(rows => {
      done(null, rows[0]);
    });
  })
};

module.exports = setup;
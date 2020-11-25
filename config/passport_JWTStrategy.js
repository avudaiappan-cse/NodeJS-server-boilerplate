const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;

const { ExtractJwt } = require("passport-jwt");
const User = require("../models/user");
const JWT_SECRET = "secret-key-avinash123";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new JWTStrategy(options, async (jwtPayLoad, done) => {
    try {
      const user = await User.findById(jwtPayLoad.id);
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.log("Error finding the user using JWT");
      return done(null, false);
    }
  })
);

module.exports = passport;

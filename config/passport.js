import passport from 'passport'

import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
    }
  

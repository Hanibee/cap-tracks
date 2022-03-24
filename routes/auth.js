import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import passport from 'passport'

const router = Router()

router.get(
  '/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
  '/google/oauth2callback', 
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/', 
  })
)

router.get('/logout', function(req, res) {
  req.logout()
  res.redirect('/students')
})

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/changePassword', checkAuth, authCtrl.changePassword)

export { router }

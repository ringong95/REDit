import cors from "cors";
import bodyParser from "body-Parser";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt-nodejs'
import cookieParser from 'cookie-parser'

import { config } from './../../config'
import database from "./../database/db";

import { SESSION_COOKIE } from './../app'

const hash = bcrypt.hashSync(config.get('APPSECRET'));

export default function AuthRoutes(router) {
  router.use(cors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    origin:['http://localhost:3000'],
    credentials: true
  }))
  router.use(bodyParser.json())
  router.use(cookieParser())

  router.post('/register', (req, res) => {
    const { email, password, fname, lname } = req.body.register;
    const hashedPass = bcrypt.hashSync(password)
     database.query('INSERT INTO users(fname, lname, email, password) VALUES($1, $2, $3, $4 )',
          [
            fname,
            lname,
            email,
            hashedPass
          ])
      .then((response) => {
        const sessionUser = { email: email }
        const JWT = jwt.sign(sessionUser, config.get('PATH'))
        res.status(200).cookie(SESSION_COOKIE, JWT, {
          secure: config.get('HTTPS'),
          maxAge: 7200000,
          httpOnly: true
        }).json({"hello": "ficl you"})
      })
      .catch((err) => {
        res.json(err)
      })

  })
  // check is user exist check
  // create a user in database with a hashed password check
  // create token with an email in it encoded
  // encrypt the fuck out of it
  // send it back to the user
  router.post('/login', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body.login;

    database.query('select * from users where email = $1;', [email])
      .then((response) => {
        // console.log(response.rows[0])
        if (bcrypt.compareSync(password, response.rows[0].password)) {
          const sessionUser = { email: email }
          const JWT = jwt.sign(sessionUser, config.get('PATH'))
          res.status(200).cookie(SESSION_COOKIE, JWT, {
            secure: config.get('HTTPS'),
            maxAge: 7200000,
            httpOnly: true
          }).json("hello")
          console.log("work?")
        }
      }).catch((err)=>{
        res.json(err)
      })
  })

  router.post('/logout', () => {
    if (req.cookie.token) {
      res.clearCookie(SESSION_COOKIE);
    }
    res.status(200).json({ success: "GOOD BYE" })
  })

  return router;
}
import cors from "cors";
import bodyParser from "body-Parser"
import database from "./../database/db"

export default function APIRoutes(router) {

  router.use(cors())
  router.use(bodyParser.json())

  router.get("/posts/:categoryid", (req, res) => {

    database.query("select * from posts where posts.categoryid = $1", [req.params.categoryid])
      .then(function (response) {
        res.json(response.rows);
      }).catch((err) => {
        res.status(500).json({ error })
      })
  });


  router.get("/weeks", (req, res) => {
    database.query("select * from weeks")
      .then(function (response) {
        res.json(response.rows);
      }).catch((err) => {
        res.status(500).json({ error })
      })
  });

  router.post("/posts", (req, res) => {
    const { title, link, description, userid, date, categoryid } = req.body.post;
    database.query('INSERT INTO POSTS( "title", "link","description","userid","date","categoryid" ) VALUES($1, $2, $3, $4, $5, $6)',
      [
        title,
        link,
        description,
        userid,
        date,
        categoryid,
      ])
      .then(function (response) {
        res.status(200).json({ success: true });
      }).catch((err) => {
        res.status(500).json({ err })
      })

  })

  router.post("/users", (req, res) => {
    // database.query('INSERT INTO users("fname", "lname", "email", "password") VALUES("firstnamevar"", "lastnamevar", "emailvar", "passwordvar"); ',[])
    // .then(function (response) {
    //   res.json(response.rows);
    // }).catch((err) => {
    //   res.status(500).json({ error })
    // })
  })

  router.post("votes/:upostId", (req, res) => {

  })

  return router;
}
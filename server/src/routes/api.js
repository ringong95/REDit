import cors from "cors";
import bodyParser from "body-Parser"
import database from "./../database/db"
import cookieParser from 'cookie-parser'
import { SESSION_COOKIE } from './../app'
import jwt from 'jsonwebtoken';

export default function APIRoutes(router) {

  router.use(cors({
    origin:['http://localhost:3000'], 
    credentials: true 
  }))
  router.use(bodyParser.json())
  router.use(cookieParser())

  router.use((req, res, next) => {
    if (!req.cookies[SESSION_COOKIE]) {
      
      return res.status(403).json({ error: 'not allowed'}
      )}
      const sessionUser = jwt.decode(req.cookies[SESSION_COOKIE])
      next()
  })


  router.get("/posts/:categoryid", (req, res) => {
    database.query(`select  
		                  posts.*, 
		                  json_agg(json_build_object( 
			                  'tagid', tags.tagid, 
			                  'tagname', tags."name"
			                )) as tagid
	                  from posts 
                      inner join post_tags on posts.postid = post_tags.postid
                      inner join tags on tags.tagid = post_tags.tagid
                      inner join category on posts.categoryid = category.categoryid
                    group by posts.postid;`, [])
      .then(function (response) {
        res.json(response.rows[0]);
      }).catch((err) => {
        res.status(500).json({ error })
      })
  });


  router.get("/weeks", (req, res) => {
    database.query(`select 
	                    weeks.title,  
	                    json_agg(
                        json_build_object(
                          'categoryid', 
                          category.categoryid::text, 
                          'categorytitle', 
                          category.title::text)
                        ) as categories	
                    from 
                      weeks 
	                    inner join category on weeks.weekid = category.weekid
                    group by 
                      weeks.weekid;`)
      .then(function (response) {
        res.json(response.rows);
      }).catch((err) => {
        res.status(500).json({ error })
      })
  });

  router.post("/posts", (req, res) => {
    const { title, link, description, userid, date, categoryid, votes } = req.body.post;
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
        res.status(200).json({ postsuccess: true });
      }).catch((err) => {
        res.status(500).json({ err })
      })

  })

  router.post("/votes/:postId", (req, res) => {
    const { postid, userid } = req.body.vote;
    database.query('insert INTO user_posts_votes("postid", "userid") VALUES($1,$2)',
      [
        postid,
        userid
      ])
      .then((reponse) => {
        res.status(200).json({ votesuccess: true });
        // Have react side add one onto ui
      }).catch((err) => {
        res.status(418).json({ err })
      })
  })
  router.post("/unvotes/:upostId", (req, res) => {
    const { postid, userid } = req.body.vote;
    database.query('DELETE from user_posts_votes where postid = $1 and userid = $2 ',
      [
        postid,
        userid
      ])
      .then((reponse) => {
        res.status(200).json({ success: true });
        // Have react side add one onto ui
      }).catch((err) => {
        res.status(418).json({ err })
      })
  })

  return router;
}
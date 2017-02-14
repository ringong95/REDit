import pg from 'pg';
import { config } from '../../config'

const dbconfig = {
  host: 'localhost',
  user: config.get('POSTGRESUSER'),
  password: config.get('POSTGRESPASSWORD'),
  database: config.get('POSTGRESDBNAME'),
}
process.on('unhandledRejection', function (e) {
  console.log(e.message, e.stack)
})
const database = new pg.Pool(dbconfig)


export default database;
import crypto from 'crypto'
import sqlite3 from 'sqlite3'

const DB_SOURCE = ':memory:'

const db = new sqlite3.Database(DB_SOURCE, (e) => {
  if (e) {
    console.error(e.message)
    throw e
  }

  console.log('Connected to the in-memory SQlite database.')

  const initialUser1Id = 'f7b98ed8-4dea-497e-8fcc-8ca3177b5b06'
  const initialUser2Id = '1cebf4ab-fe11-48b1-8c8e-39b856ce3700'
  const initialUser3Id = crypto.randomUUID()

  db.run(
    `CREATE TABLE user (
      id VARCHAR(36) PRIMARY KEY,
      name VARCHAR(100) NOT NULL
    )`,
    (e) => {
      if (e) {
        console.error(e)
        return
      }

      const insertUser = 'INSERT INTO user (id, name) VALUES (?,?)'
      db.run(insertUser, [initialUser1Id,'initial user 1'])
      db.run(insertUser, [initialUser2Id,'initial user 2'])
      db.run(insertUser, [initialUser3Id,'initial user 3'])
    }
  )

  db.run(
    `CREATE TABLE exercise (
      id VARCHAR(36) PRIMARY KEY,
      user_id VARCHAR(36) NOT NULL,
      content TEXT, 
      created_at DATE NOT NULL,
      FOREIGN KEY (user_id) REFERENCES user(id)
    )`,
    (e) => {
      if (e) {
        console.error(e)
        return
      }

      const insertExercise = 'INSERT INTO exercise (id, user_id, content, created_at) VALUES (?,?,?,?)'
      db.run(insertExercise, [crypto.randomUUID(), initialUser1Id, 'content 1', new Date()])
      db.run(insertExercise, [crypto.randomUUID(), initialUser2Id, 'content 2', new Date()])
    }
  )
})

// db.close((e) => {
//   if (e) {
//     return console.error(e.message)
//   }
//   console.log('Close the database connection.')
// })

export default db

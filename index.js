// const dbConnection = require("./connection");
const express = require("express");
const bodyParser = require("body-parser");
const resolvers = require("./resolver");
const schema = require("./schema");
const { graphqlHTTP } = require("express-graphql");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server is running");
});
const root = { lco: () => console.log("hello root") };
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () => {
  console.log("Sever is now listening at port 4000");
});

// dbConnection.connect((err) => {
//   if (err) {
//     console.log("show error" + err);
//   }
//   console.log("db connected");
// //   dbConnection.query(
// //     "CREATE TABLE IF NOT EXISTS users (user_id primary key UNIQUE NOT NULL, name VARCHAR ( 50 ) NOT NULL, email VARCHAR ( 255 ) UNIQUE NOT NULL, country text, created_on TIMESTAMP NOT NULL, last_login TIMESTAMP );"
// //   );
// // UPDATE table_name
// // SET column1 = value1,
// //     column2 = value2,
// //     ...
// // WHERE column3 = value3;
// //   const text =
// //     "INSERT INTO users(name, email, country, created_on, last_login) VALUES('mahmud', 'mahmudboss@gmail.com', 'China', '2022-06-22 19:10:25-07', '2016-06-22 19:10:25-07');";
// //   //   const values = ["brianc", "brian.m.carlson@gmail.com"];
// //   // callback
// //   dbConnection.query(text, (err, res) => {
// //     if (err) {
// //       console.log(err.stack);
// //     } else {
// //       console.log(res);
// //       // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
// //     }
// //   });
// });

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

const app = require("./app");

//env variable import
dotenv.config({ path: "backend/config/config.env" });

//handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("shutting down due to uncaught exceptions");
  process.exit(1);
});

//connect database
connectDatabase();

//starting server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `server is up and running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//handling unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("server is shutting down due to unhandled rejection");

  server.close(() => {
    process.exit(1);
  });
});

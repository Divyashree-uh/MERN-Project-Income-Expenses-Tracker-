const express = require("express");
require("./config/dbConnect");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");

const app = express();

//middlewares

//users route
app.use("/api/v1/users", usersRoute);
//account routes
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers

//listen to server
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));

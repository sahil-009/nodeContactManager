const express = require('express')
const app=express()
const dotenv = require('dotenv').config()

const port =process.env.PORT || 5000


app.use("/v1/api/contacts" ,require("./routes/contactRoutes"))

app.listen(port, () => {
    console.log(`server is connected at port ${port}`);
});
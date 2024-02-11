require('dotenv').config();
const express = require("express");
const cors = require("cors")
const app = express();
const autRouter = require("./router/auth_router");
const contactRouter = require("./router/contact_router")
const connectDB = require("./utils/database");
const serviceRouter = require('./router/service_router');
const AdminRouter = require('./router/admin_router');

const corsOption = {
    origin: "",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}
app.use(cors(corsOption))

app.use(express.json());

app.use("/api/admin", AdminRouter);
app.use("/api/auth", autRouter);
app.use("/api/form", contactRouter);
app.use("/api/services_Data", serviceRouter)


const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Port no is ${PORT}`)
    });

})

const express = require("express")
const config = require("./config/config")
require("./config/db_connect")
const path = require("path")
const cors = require("cors")
const { auth_route, user_route } = require("./routes")
const error_handler = require("./utils/error-handler")
const { authMiddleware, checkBanMiddleware } = require("./middlewares")
const { init_admin_account } = require("./init_admin")


const app = express();
app.use(cors());
/* static files */
app.use('/static/images', express.static(path.join(__dirname, './files/images')))
app.use('/static/uploads', express.static(path.join(__dirname, './src/uploads')))

init_admin_account()
app.use(express.json());
app.use("/auth", auth_route);
app.use("/api/v1/users", authMiddleware, checkBanMiddleware, user_route);
//error handler
app.use(error_handler);


app.listen(config.PORT, ()=>{
    console.log(`Server listening on port ${config.PORT}`)
})
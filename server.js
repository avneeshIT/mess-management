require("dotenv").config();

const app= require("./src/app");
const connectDB = require("./src/config/db");

const PORT=process.env.PORT || 5004;


connectDB();

app.listen( PORT, () => {
    console.log('Server is running at 5004');

}
);
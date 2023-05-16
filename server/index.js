import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";

import connectDB from "./config/database.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

//data imports
import User from "./models/User.js";
import Staff from "./models/Staff.js";
import { dataUser, dataStaff } from "./data/index.js";

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cors());


//Passport config
import passportFunction from './config/passport.js';
// console.log("🚀 ~ file: index.js:43 ~ passportFunction:", passportFunction)

passportFunction(passport)
// console.log("🚀 ~ file: index.js:43 ~ a:")


//Allow requests from frontend
app.use(
    cors({
      origin: process.env.FRONT_END,
      credentials: true,
    })
  );

connectDB();

app.use(cookieParser("keyboard cat"))

// Sessions
app.use(
    session({
      secret: "keyboard cat",
      resave: true,
      saveUninitialized: true,
      proxy: true,
      cookie: {
        sameSite: process.env.ENV == "production" ? 'none' : 'lax',
        secure: process.env.ENV == "production" ? true : ""
      },
      store: new MongoStore({ mongooseConnection: mongoose.connection,
        mongoUrl: process.env.MONGO_URL 
      }),
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


/*Routes*/
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    /*only add data one time */
    // User.insertMany(dataUser);
    //Staff.insertMany(dataStaff);
  })
  .catch((error) => console.log(`${error} did not connect`));

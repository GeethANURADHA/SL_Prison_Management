import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import prisonerRoutes from "./routes/prisoner.js";
import generalRoutes from "./routes/general.js";
import statusRoutes from "./routes/status.js";

import connectDB from "./config/database.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());



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
app.use("/status", statusRoutes);
app.use("/prisoner", prisonerRoutes);
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

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);

    //Medicine.insertMany(dataMedicine);

    //Food.insertMany(dataFood);

    //Inventory.insertMany(dataInventory);

    //User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));

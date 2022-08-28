"use strict";

import * as dotenv from 'dotenv';
dotenv.config();
const express = require("express");
// @ts-ingnore
import { Application } from 'express';
const config = require("./config.js");

var mongoose = require("mongoose");

import App from './app';

const app: Application = express();
new App(app);

var port = process.env.PORT || 3000;
const url = `mongodb+srv://${config.USER}:${config.PASS}@${config.CLUSTER}/${config.BD}?retryWrites=true&w=majority`;
// console.log(url)
mongoose.Promise = global.Promise;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("BD OK...");
    app.listen(process.env.PORT || port, () => {
      console.log(`Run in localhost:${port}`);
    });
  })
  .catch((err: any) => console.log(err));

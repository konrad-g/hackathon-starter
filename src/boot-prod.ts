#!/usr/bin/env node
import {AppServer} from "./AppServer";

var isProduction = true;
var mainApp = new AppServer(isProduction);
mainApp.start();

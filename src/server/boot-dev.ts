#!/usr/bin/env node
import {AppServer} from "./AppServer";

var isProduction = false;
var mainApp = new AppServer(isProduction);
mainApp.start();

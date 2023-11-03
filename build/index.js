import path from "path";
import util from "util";
import express from "express";
import powerOff from "power-off";
import sleepMode from "sleep-mode";
import address from "network-address";
import { UpdateNotifier } from "update-notifier";
import pkg from "../package.json";

var app = express();
var notifier = new UpdateNotifier({ pkg });

// app.use(express.static(path.join(__dirname, "public")));

app.delete("/", (req, res) => {
  res.end();
  // util.log("exit");
  process.exit();
});

app.post("/power-off", (req, res) => {
  powerOff(function (err, stderr, stdout) {
    if (err) {
      // util.log(err);
      res.status(500).json({ error: "Can't run power-off" });
    } else {
      res.end();
    }
  });
});

app.post("/sleep", (req, res) => {
  sleepMode(function (err, stderr, stdout) {
    if (err) {
      // util.log(err);
      res.status(500).json({ error: "Can't run sleep" });
    } else {
      res.end();
    }
  });
});

app.get("/address", (req, res) => {
  res.json({ address: address() });
});

app.get("/update", (req, res) => {
  updateNotifier({
    pkg: pkg,
    callback: (err, update) => {
      if (err) return res.json({});
      res.json(update);
    },
  });
});

var port = 3110;

app.listen(port, () => {
  console.log("stop-server listening on port " + port);
});

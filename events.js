const { EventEmitter } = require("events");

class AppEvents extends EventEmitter {}
const bus = new AppEvents();

bus.on("user:created", (u) => console.log("welcome", u.name));
bus.emit("user:created", { name: "Ana" });

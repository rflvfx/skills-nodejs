const { EventEmitter } = require("events");

class AppEvents extends EventEmitter {}
const bus = new AppEvents();

bus.on("user:created", (u) => console.log("welcome", u.name));
bus.emit("user:created", { name: "Ana" });
- Optimize performance — iteration 3 (2015)
- Polish code — iteration 4 (2015)
- Document usage — iteration 7 (2015)

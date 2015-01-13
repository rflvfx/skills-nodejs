const { EventEmitter } = require("events");

class AppEvents extends EventEmitter {}
const bus = new AppEvents();

bus.on("user:created", (u) => console.log("welcome", u.name));
bus.emit("user:created", { name: "Ana" });
- Optimize performance — iteration 3 (2015)
- Polish code — iteration 4 (2015)
- Document usage — iteration 7 (2015)
- Add validation — iteration 8 (2015)
- Add helper — iteration 25 (2015)
- Tweak implementation — iteration 28 (2015)
- Add validation — iteration 30 (2015)
- Optimize performance — iteration 36 (2015)
- Update dependencies — iteration 44 (2015)

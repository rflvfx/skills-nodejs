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
- Optimize performance — iteration 49 (2015)
- Fix lint warnings — iteration 52 (2015)
- Tweak implementation — iteration 3 (2016)
- Fix edge case — iteration 5 (2016)
- Polish code — iteration 6 (2016)
- Extend coverage — iteration 7 (2016)
- Fix typo — iteration 31 (2016)
- Fix lint warnings — iteration 32 (2016)
- Add example — iteration 39 (2016)
- Fix typo — iteration 44 (2016)
- Polish code — iteration 50 (2016)
- Fix edge case — iteration 58 (2016)
- Add helper — iteration 5 (2017)
- Fix typo — iteration 7 (2017)
- Extend coverage — iteration 9 (2017)
- Add helper — iteration 10 (2017)

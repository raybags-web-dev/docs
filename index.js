const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));


(async() => {
    // Port set-up and start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`app is listening on port ${ PORT }`));
})();
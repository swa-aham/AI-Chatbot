// console.log("Hello from Backend");
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// app.get("/", (req, res, next) => {
//     return res.send("Hello from Backend");
// })
// app.post("/", (req, res, next) => {
//     console.log(req.body.name);
//     return res.send("Hello from Backend");
// })
// app.delete("/user/:id", (req, res, next) => {
//     console.log(req.params.id);
//     return res.send("Hello from Backend");
// })
// app.get("/soham", (req, res, next) => {
//     return res.send("Haan bhai kaisa hai...");
// })
// connections and  listeners
const PORT = process.env.PORT || 3000;
connectToDatabase().then(() => {
    // console.log("Connected to database");
    app.listen(PORT, () => {
        console.log("Server is running on port 3000, 🥹   🥹   🥹   🥹");
    });
}).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map
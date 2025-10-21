import Express from "express";
import route from "./routes/user.route.ts";
const app = Express();
app.use(Express.json());

app.use("/api", route)


export default app;

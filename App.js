import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

const app = express()
app.use(cors()); 
app.use(express.json()); 
CourseRoutes(app);
ModuleRoutes(app);
Hello(app)
Lab5(app);
app.listen(4000);
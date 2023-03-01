import { Router } from 'express';
import { 
    taskAdd, 
    taskDelete, 
    taskEdit, 
    taskRenderEdit, 
    tasksRenderList, 
    taskToggleDone 
} from "../controllers/tasks.controllers";

const router = Router();

router.get("/", tasksRenderList);
router.post("/tasks/add", taskAdd);
router.get("/tasks/:id/toggleDone", taskToggleDone)
router.get("/tasks/:id/edit", taskRenderEdit);
router.post("/tasks/:id/edit", taskEdit);
router.get("/tasks/:id/delete", taskDelete);

export default router;
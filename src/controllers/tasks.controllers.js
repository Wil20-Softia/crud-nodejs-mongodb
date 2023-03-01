import Task from '../models/task';

export const tasksRenderList = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render("index", { tasks: tasks });
};

export const taskAdd =  async (req, res) => {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
};

export const taskRenderEdit = async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
};

export const taskEdit =  async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
};

export const taskDelete = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.done = !task.done;
    task.save();
    res.redirect("/");
};
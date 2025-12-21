// todo.js
export class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  completeTask(task) {
    const item = this.tasks.find(t => t.task === task);
    if (item) item.completed = true;
  }

  listTasks() {
    this.tasks.forEach(t =>
      console.log(`${t.completed ? '✔️' : '❌'} ${t.task}`)
    );
  }
}

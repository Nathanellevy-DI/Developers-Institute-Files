// app.js
import { TodoList } from './todo.js';

const todo = new TodoList();

todo.addTask('Learn Node.js');
todo.addTask('Practice ES6');
todo.completeTask('Learn Node.js');

todo.listTasks();

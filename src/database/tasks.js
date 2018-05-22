import Task from '../models/Task';

let tasks = [];

tasks.push(new Task(1, 1, null, 1, "Timesheet", 159, true));
tasks.push(new Task(2, 1, null, 1, "Movie Tracker", null, false));
tasks.push(new Task(3, 1, null, 2, "UDEMY - Angular", 31, true));
tasks.push(new Task(4, 1, null, 3, "Groceristar", 159, true));
tasks.push(new Task(5, 1, null, 4, "Event Blog",  null, false));
tasks.push(new Task(6, 1, null, 2, "Intern Tasks", 159, true));
tasks.push(new Task(7, 2, 1, 5, "Finance App", 21, true));
tasks.push(new Task(8, 1, 1, 1, "Budget App", 21, false));

export { tasks};
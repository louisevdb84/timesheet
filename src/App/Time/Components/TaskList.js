import React, { Component } from 'react';
import categories from '../../../database/categories'
import projects from '../../../database/projects'
import tasks from '../../../database/tasks'
import timesheetentries from '../../../database/timesheetentries'
import users from '../../../database/users'

class TaskList extends Component {
  render() {
    console.log(categories)
    console.log(projects)
    console.log(tasks)
    console.log(timesheetentries)
    console.log(users)
    return (
      <div>
      TaskList
      </div>
    );
  }
}

export default TaskList;
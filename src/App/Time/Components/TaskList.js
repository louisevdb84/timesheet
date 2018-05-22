import React, { Component } from 'react';
import { tasks } from '../../../database/tasks'
import { categories } from '../../../database/categories'
import { users} from '../../../database/users'
import findById from '../../../database/helper/findById'
import Task from './Task';
import {Card, CardBody} from "reactstrap";

class TaskList extends Component {
  render() {    
    return (
      <div>
        <div className="content">                  
            <Card>              
                 <CardBody>                
                    {
                        tasks.map(task => {                        
                        return <Task
                          task={task}
                          categoryName={findById(categories, task.categoryId).name} 
                          userName={findById(users, task.userId).name}/>
                      })
                    }                        
                    </CardBody>
                  </Card>        
            </div>                
      </div>
    );
  }
}

export default TaskList;